export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-12 text-sm">
      <div className="app-container grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-white font-bold mb-4">実家じまい総合相談窓口</h4>
          {/* TODO: Replace with actual partner name before launch */}
          <p>運営：株式会社</p>
          <p>千葉県東葛エリア事務局</p>
        </div>
        <div className="text-xs">
          <p className="mb-2">
            ※当窓口は地域の専門家と連携し、空き家対策特別措置法に基づいた適切な管理・処分を推進する民間相談機関です。
          </p>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 pt-8">
        <p>&copy; {new Date().getFullYear()} 実家じまい総合相談窓口 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
