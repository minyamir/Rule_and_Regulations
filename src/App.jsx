import React, { useState } from "react";
import RulesPage from "./pages/RulesPage";
import HowToWinPage from "./pages/HowToWinPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("rules");

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 flex flex-col">
      {/* Top Navigation Switcher */}
      <nav className="flex justify-center gap-3 p-2 bg-slate-900/90 border-b border-slate-800 text-xs sm:text-sm sticky top-0 z-50 backdrop-blur-md">
        <button
          onClick={() => setCurrentPage("rules")}
          className={`px-4 py-1.5 rounded-lg font-semibold transition-all duration-200 ${
            currentPage === "rules"
              ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
              : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
          }`}
        >
          መመሪያዎች (Rules)
        </button>
        <button
          onClick={() => setCurrentPage("how-to-win")}
          className={`px-4 py-1.5 rounded-lg font-semibold transition-all duration-200 ${
            currentPage === "how-to-win"
              ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
              : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
          }`}
        >
          ማሸነፊያ መንገዶች (How To Win)
        </button>
      </nav>

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === "rules" ? <RulesPage /> : <HowToWinPage />}
      </main>
    </div>
  );
}