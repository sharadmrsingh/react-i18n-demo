import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
      <p className="mb-6 text-lg">{t("description")}</p>

      <div className="space-x-4">
        <button
          onClick={() => changeLanguage("en")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          English
        </button>

        <button
          onClick={() => changeLanguage("hi")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          हिंदी
        </button>
      </div>
    </div>
  );
}

export default App;
