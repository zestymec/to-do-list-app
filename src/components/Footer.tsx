import React from "react";

export default function Umer() {
  return (
    <footer className="w-full bg-[#0d1c3a] text-white py-8 border-t border-white">
      <div className="max-w-[570px] mx-auto px-6 flex flex-col items-center text-center">
        <p className="text-sm font-light mb-2">
          Designed & Developed by{" "}
          <span className="font-bold text-[#ff8856]">Umer Aziz</span>
        </p>
        <p className="text-xs text-gray-400 mb-4 max-w-sm">
          Professional software developer crafting high-performance digital
          experiences. Passionate about clean architecture and scalable
          solutions.
        </p>
        <a
          href="https://zestymec.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium border border-[#ff8856] text-[#ff8856] px-4 py-1.5 rounded-full hover:bg-[#ff8856] hover:text-black transition-all"
        >
          View Portfolio
        </a>
        <p className="text-[10px] text-gray-600 mt-6">
          © {new Date().getFullYear()} Umer Aziz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
