import React from "react";
import { bingoNumbersGrid, patternGridCells } from "../data/bingoRules";

export default function RulesCard({ pattern }) {
  const activeCells = patternGridCells[pattern.id] || [];

  return (
    <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 sm:p-5 shadow-lg space-y-3">
      <div className="space-y-1">
        <h4 className="font-semibold text-sm sm:text-base text-slate-100">
          {pattern.id}. {pattern.name}
        </h4>
        <div className="border-b border-dashed border-slate-700 w-full my-2"></div>
      </div>

      <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 max-w-xs mx-auto">
        <div className="grid grid-cols-5 gap-1.5">
          {bingoNumbersGrid.flat().map((cell, index) => {
            const active = activeCells.includes(cell);
            let bgStyle = "bg-slate-800/80 text-slate-300 border-slate-700";
            
            if (active) {
              if (cell === "FREE") {
                bgStyle = "bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/20";
              } else {
                bgStyle = "bg-amber-400 text-slate-950 font-bold border-amber-300 shadow-md shadow-amber-400/20";
              }
            }

            return (
              <div
                key={index}
                className={`h-9 sm:h-10 rounded-lg flex items-center justify-center text-xs sm:text-sm font-semibold border transition-all ${bgStyle}`}
              >
                {cell}
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-slate-400 text-center pt-1">
        {pattern.description}
      </p>
    </div>
  );
}