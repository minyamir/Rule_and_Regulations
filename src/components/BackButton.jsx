import React from "react";

export default function BackButton({ onClick }) {
  return (
    <div className="sticky bottom-4 z-40 max-w-xl mx-auto px-4 pt-2">
      <button
        onClick={onClick}
        className="w-full py-3 px-4 bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/50 rounded-xl font-medium shadow-xl backdrop-blur-md flex items-center justify-center gap-2 transition"
      >
        <span>🔙</span>
        <span className="text-white">ወደ ኋላ ተመለስ</span>
      </button>
    </div>
  );
}