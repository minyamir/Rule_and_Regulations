import React, { useState } from "react";
import Header from "../components/Header";
import RulesCard from "../components/RulesCard";
import BackButton from "../components/BackButton";
import { translations, getWinningPatterns } from "../data/bingoRules";

export default function HowToWinPage() {
  const [lang, setLang] = useState("am");
  const t = translations[lang] || translations.am;
  const patterns = getWinningPatterns(lang);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between pb-6">
      <div>
        {/* Header Component */}
        <Header />

        {/* ቋንቋ መምረጫ (Language Selector) */}
        <div className="flex justify-center gap-2 py-3 bg-slate-900/60 border-b border-slate-800 text-xs">
          {["am", "om", "so", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-md uppercase font-bold transition ${
                lang === l
                  ? "bg-emerald-500 text-slate-950"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-xl mx-auto px-4 py-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-400 flex items-center justify-center gap-2">
              {t.winningTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.winningSub}
            </p>
          </div>

          {/* Winning Pattern Cards */}
          <div className="space-y-6">
            {patterns.map((pattern) => (
              <RulesCard key={pattern.id} pattern={pattern} />
            ))}
          </div>

          {/* System Notice */}
          <div className="border border-dashed border-emerald-500/50 rounded-xl p-4 text-center text-xs sm:text-sm text-emerald-300 bg-emerald-950/20">
            {t.systemNotice}
          </div>
        </div>
      </div>

      {/* Floating Back Button */}
      <BackButton onClick={handleBack} text={t.backBtn} />
    </div>
  );
}