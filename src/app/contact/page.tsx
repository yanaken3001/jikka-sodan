"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Send, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

// GAS API URL is loaded from process.env.NEXT_PUBLIC_GAS_API_URL

// 1. Property Type (Radio)
// 2. Property Area (Radio)
// 3. Address Details (Input)
// 4. Name (Input)
// 5. Email (Input)
// 6. Phone (Input)
// 7. Remarks (Textarea)
type FormInputs = {
  propertyType: string;
  propertyArea: string;
  propertyAddress: string;
  name: string;
  email: string;
  phone: string;
  remarks: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: "onChange", // Enable validation on change to update isValid in real-time
  });

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Logic for GAS submission
      const response = await fetch(process.env.NEXT_PUBLIC_GAS_API_URL || "", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Mock success delay (GAS no-cors mode doesn't return status, so we assume success if no error thrown)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError("送信中にエラーが発生しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="w-full h-16 bg-blue-900" aria-hidden="true"></div>
        <Header />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-green-500 w-20 h-20" />
            </div>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              お問い合わせありがとうございます
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              送信が完了いたしました。<br />
              担当者より折り返しご連絡させていただきます。<br />
              今しばらくお待ちください。
            </p>
            <Button href="/" variant="secondary">
              トップページへ戻る
            </Button>
          </div>
        </main>
        <Footer />
        <div className="w-full h-16 bg-blue-900" aria-hidden="true"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="w-full h-16 bg-blue-900" aria-hidden="true"></div>
      <Header />

      <main className="flex-grow py-12 md:py-20">
        <div className="app-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-official-navy">
              無料相談・お問い合わせ
            </h1>
            <p className="text-gray-600">
              以下のフォームにご記入の上、送信ボタンを押してください。<br />
              <span className="text-sm">※ すべての必須項目をご入力ください。</span>
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* 1. Property Type (Radio) */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  物件種別 <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {["戸建", "アパート", "マンション", "土地", "その他"].map((type) => (
                    <label
                      key={type}
                      className="border border-gray-200 rounded-lg py-3 px-4 flex items-center cursor-pointer hover:bg-gray-50 has-[:checked]:bg-blue-50 has-[:checked]:border-official-blue has-[:checked]:text-official-blue transition-all"
                    >
                      <input
                        type="radio"
                        value={type}
                        className="sr-only"
                        {...register("propertyType", { required: "物件種別を選択してください" })}
                      />
                      <span className="font-bold">{type}</span>
                    </label>
                  ))}
                </div>
                {errors.propertyType && (
                  <p className="text-red-500 text-sm mt-2">{errors.propertyType.message}</p>
                )}
              </div>

               {/* 2. Property Area (Radio) */}
               <div>
                <label className="block font-bold text-gray-700 mb-2">
                  物件住所エリア <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {["東京都", "埼玉県", "千葉県", "神奈川県", "その他"].map((area) => (
                    <label
                      key={area}
                      className="border border-gray-200 rounded-lg py-3 px-4 flex items-center cursor-pointer hover:bg-gray-50 has-[:checked]:bg-blue-50 has-[:checked]:border-official-blue has-[:checked]:text-official-blue transition-all"
                    >
                      <input
                        type="radio"
                        value={area}
                        className="sr-only"
                        {...register("propertyArea", { required: "物件住所エリアを選択してください" })}
                      />
                      <span className="font-bold">{area}</span>
                    </label>
                  ))}
                </div>
                {errors.propertyArea && (
                  <p className="text-red-500 text-sm mt-2">{errors.propertyArea.message}</p>
                )}
              </div>

              {/* 3. Address Details (Input) */}
              <div>
                <label htmlFor="propertyAddress" className="block font-bold text-gray-700 mb-2">
                  都道府県以下 <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <input
                  id="propertyAddress"
                  type="text"
                  className={`w-full p-4 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-official-blue focus:border-transparent outline-none transition-all ${
                    errors.propertyAddress ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                  placeholder="市区町村・番地など"
                  {...register("propertyAddress", { required: "物件の所在地を入力してください" })}
                />
                {errors.propertyAddress && (
                  <p className="text-red-500 text-sm mt-2">{errors.propertyAddress.message}</p>
                )}
              </div>

              {/* 4. Name (Input) */}
              <div>
                <label htmlFor="name" className="block font-bold text-gray-700 mb-2">
                  お名前 <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full p-4 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-official-blue focus:border-transparent outline-none transition-all ${
                    errors.name ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                  placeholder="例：山田 太郎"
                  {...register("name", { required: "お名前を入力してください" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                )}
              </div>

              {/* 5. Email (Input) */}
              <div>
                <label htmlFor="email" className="block font-bold text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full p-4 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-official-blue focus:border-transparent outline-none transition-all ${
                    errors.email ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                  placeholder="例：taro.yamada@example.com"
                  {...register("email", {
                    required: "メールアドレスを入力してください",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "正しいメールアドレスを入力してください",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                )}
              </div>

              {/* 6. Phone (Input) */}
              <div>
                <label htmlFor="phone" className="block font-bold text-gray-700 mb-2">
                  電話番号 <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full p-4 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-official-blue focus:border-transparent outline-none transition-all ${
                    errors.phone ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                  placeholder="例：090-1234-5678"
                  {...register("phone", {
                    required: "電話番号を入力してください",
                    pattern: {
                      value: /^[0-9-]{10,13}$/,
                      message: "正しい電話番号を入力してください",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
                )}
              </div>

              {/* 7. Remarks (Textarea, Optional) */}
              <div>
                <label htmlFor="remarks" className="block font-bold text-gray-700 mb-2">
                  備考 <span className="text-gray-400 text-sm font-normal ml-1">(任意)</span>
                </label>
                <textarea
                  id="remarks"
                  rows={5}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-official-blue focus:border-transparent outline-none transition-all"
                  placeholder="ご質問やご希望があればご記入ください"
                  {...register("remarks")}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  variant="cta"
                  size="lg"
                  className="w-full text-xl py-5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" />
                      この内容で相談する
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  ※お預かりした個人情報は厳重に管理し、ご相談対応以外の目的には使用いたしません。
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <div className="w-full h-16 bg-blue-900" aria-hidden="true"></div>
    </div>
  );
}
