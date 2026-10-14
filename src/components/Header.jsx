import React from "react";
import { X, Globe, MoreVertical } from "lucide-react";

export default function Header({ currentLang, onLanguageChange }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <button className="p-1 hover:bg-slate-800 rounded-full transition">
          <X className="w-5 h-5 text-slate-300" />
        </button>
        <span className="font-bold tracking-wider text-sm sm:text-base">
          BINGO HABESHA
        </span>
      </div>

      {/* Language Selection Dropdown */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 px-2 py-1 rounded-lg text-xs">
          <Globe className="w-3.5 h-3.5 text-emerald-400" />
          <select
            value={currentLang}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
          >
            <option value="am" className="bg-slate-900 text-white">አማርኛ</option>
            <option value="om" className="bg-slate-900 text-white">Afaan Oromoo</option>
            <option value="so" className="bg-slate-900 text-white">Soomaali</option>
            <option value="en" className="bg-slate-900 text-white">English</option>
          </select>
        </div>

        <button className="p-1 hover:bg-slate-800 rounded-full transition">
          <MoreVertical className="w-5 h-5 text-slate-300" />
        </button>
      </div>
    </header>
  );
}