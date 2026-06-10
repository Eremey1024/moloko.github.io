import { Monitor, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          <span className="text-sm font-medium tracking-tight">Новая версия уже доступна</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] mb-6 leading-tight">
          Молоко-Про — <span className="text-blue-600 whitespace-nowrap">умный учет</span><br className="hidden sm:block" /> сбора молока
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-[#64748B] leading-relaxed mb-10">
          Автоматизация приема молока, расчет плотности (из литров в килограммы), формирование Excel и XML-ведомостей для системы Меркурий прямо в телефоне или на ПК.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#download" className="flex items-center gap-3 w-full sm:w-auto justify-center rounded-2xl bg-[#2563EB] px-8 py-4 font-bold text-lg text-white shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
            <Smartphone className="w-6 h-6 flex-shrink-0" />
            Android APK
          </a>
          <a href="#download" className="flex items-center gap-3 w-full sm:w-auto justify-center rounded-2xl bg-white px-8 py-4 font-bold text-lg text-[#2563EB] border-2 border-blue-600 hover:bg-slate-50 transition-all active:scale-95">
            <Monitor className="w-6 h-6 flex-shrink-0" />
            Windows / Web
          </a>
        </div>
      </div>
    </section>
  );
}
