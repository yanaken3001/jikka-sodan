import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ContactPage from "@/app/contact/page";

// 実際の GAS には送らない。fetch はすべてテスト内で差し替える。
const GAS_URL = "https://gas.example.invalid/exec";
const ERROR_TEXT = "送信中にエラーが発生しました。時間をおいて再度お試しください。";
const DONE_TEXT = "送信が完了いたしました。";

const inputs = {
  propertyAddress: "船橋市本町1-1-1",
  name: "山田 太郎",
  email: "taro@example.com",
  phone: "090-1234-5678",
};

async function fillAndSubmit(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByText("戸建"));
  await user.click(screen.getByText("千葉県"));
  await user.type(screen.getByLabelText(/都道府県以下/), inputs.propertyAddress);
  await user.type(screen.getByLabelText(/お名前/), inputs.name);
  await user.type(screen.getByLabelText(/メールアドレス/), inputs.email);
  await user.type(screen.getByLabelText(/電話番号/), inputs.phone);
  await user.click(screen.getByRole("button", { name: /この内容で相談する/ }));
}

const ok = (body: string) => new Response(body, { status: 200 });

beforeEach(() => {
  vi.stubEnv("NEXT_PUBLIC_GAS_API_URL", GAS_URL);
  window.scrollTo = vi.fn();
  Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("問い合わせ送信: 失敗時は「送信完了」を出さない", () => {
  const failures: [string, () => Promise<Response>][] = [
    ["ネットワークエラー", () => Promise.reject(new TypeError("Failed to fetch"))],
    ["HTTP 500", async () => new Response("Internal Server Error", { status: 500 })],
    ["GAS が JSON でエラーを返す", async () => ok(JSON.stringify({ status: "error", message: "TypeError" }))],
    ["GAS が HTML のエラーページを返す", async () => ok("<!DOCTYPE html><html><body>TypeError: x is not defined</body></html>")],
  ];

  for (const [label, respond] of failures) {
    it(`${label}: エラーを表示し、完了画面にしない`, async () => {
      const fetchMock = vi.fn(respond);
      vi.stubGlobal("fetch", fetchMock);
      const user = userEvent.setup();
      render(<ContactPage />);
      await fillAndSubmit(user);

      await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
      await new Promise((r) => setTimeout(r, 1300)); // 旧実装の1秒待ちを越えて確認
      expect(screen.queryByText(DONE_TEXT, { exact: false })).toBeNull();
      expect(screen.getByText(ERROR_TEXT)).toBeTruthy();
    }, 10000);
  }

  it("送信先URL未設定: 通信せずエラーを表示し、完了画面にしない", async () => {
    vi.stubEnv("NEXT_PUBLIC_GAS_API_URL", "");
    const fetchMock = vi.fn(async () => ok("{}"));
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<ContactPage />);
    await fillAndSubmit(user);

    await new Promise((r) => setTimeout(r, 1300));
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.queryByText(DONE_TEXT, { exact: false })).toBeNull();
    expect(screen.getByText(ERROR_TEXT)).toBeTruthy();
  }, 10000);

  it("失敗後も入力内容が残り、そのまま再送できる", async () => {
    const fetchMock = vi
      .fn<() => Promise<Response>>()
      .mockResolvedValueOnce(new Response("err", { status: 500 }))
      .mockResolvedValueOnce(ok(JSON.stringify({ status: "success" })));
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<ContactPage />);
    await fillAndSubmit(user);

    await waitFor(() => expect(screen.getByText(ERROR_TEXT)).toBeTruthy(), { timeout: 3000 });
    expect((screen.getByLabelText(/都道府県以下/) as HTMLInputElement).value).toBe(inputs.propertyAddress);
    expect((screen.getByLabelText(/お名前/) as HTMLInputElement).value).toBe(inputs.name);
    expect((screen.getByLabelText(/メールアドレス/) as HTMLInputElement).value).toBe(inputs.email);
    expect((screen.getByLabelText(/電話番号/) as HTMLInputElement).value).toBe(inputs.phone);
    const retry = screen.getByRole("button", { name: /この内容で相談する/ }) as HTMLButtonElement;
    expect(retry.disabled).toBe(false);

    await user.click(retry);
    await waitFor(() => expect(screen.getByText(DONE_TEXT, { exact: false })).toBeTruthy(), { timeout: 3000 });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  }, 15000);
});

describe("問い合わせ送信: 成功時の挙動は変えない", () => {
  for (const [label, body] of [
    ["GAS が JSON の success を返す", JSON.stringify({ status: "success", lead_id: "L1" })],
    ["GAS がプレーンテキストを返す", "OK"],
  ] as const) {
    it(`${label}: 完了画面を表示し、同じ宛先・同じ本文で POST する`, async () => {
      const fetchMock = vi.fn(async (..._args: [string, RequestInit]) => ok(body));
      vi.stubGlobal("fetch", fetchMock);
      const user = userEvent.setup();
      render(<ContactPage />);
      await fillAndSubmit(user);

      await waitFor(() => expect(screen.getByText(DONE_TEXT, { exact: false })).toBeTruthy(), { timeout: 3000 });
      expect(screen.getByText("お問い合わせありがとうございます")).toBeTruthy();
      expect(fetchMock).toHaveBeenCalledTimes(1);
      const [url, init] = fetchMock.mock.calls[0];
      expect(url).toBe(GAS_URL);
      expect(init.method).toBe("POST");
      expect(JSON.parse(init.body as string)).toEqual({
        propertyType: "戸建",
        propertyArea: "千葉県",
        ...inputs,
        remarks: "",
      });
    }, 10000);
  }
});
