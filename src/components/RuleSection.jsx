import React from "react";
import RulesCard from "./RulesCard";

export default function RuleSection({ content }) {
  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-6">
      <div className="space-y-1">
        <span className="text-emerald-400 font-medium text-sm">{content.title}</span>
        <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
          {content.subtitle}
        </h2>
      </div>

      <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-5 text-sm sm:text-base leading-relaxed text-slate-200 shadow-xl space-y-4">
        <h3 className="font-bold text-base text-white">
          {content.cardHeader}
        </h3>
        <p className="text-slate-300">
          {content.welcomeText}
        </p>

        {content.generalRules.map((section, idx) => (
          <div key={idx} className="space-y-2 pt-2">
            <h4 className="font-semibold text-emerald-400">{section.title}</h4>
            <ul className="space-y-2 pl-4 list-disc text-slate-300">
              {section.points.map((pt, pIdx) => (
                <li key={pIdx} className="text-xs sm:text-sm leading-normal">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <h3 className="text-lg sm:text-xl font-bold text-amber-400 flex items-center justify-center gap-2">
          {content.winningTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          {content.winningSub}
        </p>
      </div>

      <div className="space-y-6">
        {content.winningPatterns.map((pattern) => (
          <RulesCard key={pattern.id} pattern={pattern} />
        ))}
      </div>

      <div className="border border-dashed border-emerald-500/50 rounded-xl p-4 text-center text-xs sm:text-sm text-emerald-300 bg-emerald-950/20">
        {content.systemNotice}
      </div>
    </div>
  );
}