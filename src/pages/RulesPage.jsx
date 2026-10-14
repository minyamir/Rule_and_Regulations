import React, { useState } from "react";
import Header from "../components/Header";
import RuleSection from "../components/RuleSection";
import BackButton from "../components/BackButton";
import { translations } from "../data/bingoRules";

export default function RulesPage() {
  const [lang, setLang] = useState("am"); // default is Amharic
  const currentContent = translations[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between pb-6">
      <div>
        <Header currentLang={lang} onLanguageChange={setLang} />
        <RuleSection content={currentContent} />
      </div>
      <BackButton label={currentContent.backBtn} onClick={() => alert("Back Clicked")} />
    </div>
  );
}