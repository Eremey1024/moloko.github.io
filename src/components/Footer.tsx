import { Droplet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto bg-white/40 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold text-blue-900/60 uppercase tracking-widest">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-black tracking-tight text-slate-900">Молоко<span className="text-[#2563EB]">-Про</span> v2.4.0 — {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6">
          <span className="hidden md:inline">Учет ТТН</span>
          <span className="hidden lg:inline">Конвертация Литр/Кг</span>
          <span className="hidden md:inline">ГОСТ 26767-85</span>
        </div>
        <div>Сделано для профессионалов</div>
      </div>
    </footer>
  );
}
