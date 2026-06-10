import { Monitor, Smartphone, Globe, ArrowRight } from 'lucide-react';

export default function Download() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden" id="download">
      <div className="absolute inset-0 bg-blue-700 opacity-20 transform -skew-y-3 origin-center scale-110"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-display font-extrabold text-white sm:text-4xl tracking-tight drop-shadow-md">
            Скачать приложение
          </h2>
          <p className="mt-4 text-lg text-blue-100 font-medium">
            Доступно для всех современных платформ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Android */}
          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 text-center ring-1 ring-white/20 transition-all hover:-translate-y-2 hover:bg-white/15">
            <div className="mx-auto h-20 w-20 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/10 mb-6">
              <Smartphone className="h-10 w-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-3">Android APK</h3>
            <p className="text-blue-100 mb-8 mx-auto text-sm leading-relaxed">
              Мобильное приложение для работы без интернета.
            </p>
            <a href="/downloads/moloko-pro.apk" download="moloko-pro.apk" className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Загрузить APK
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Windows */}
          <div className="bg-white rounded-[2rem] p-8 text-center shadow-2xl ring-1 ring-black/5 transition-all hover:-translate-y-2 relative transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
              Для пунктов приема
            </div>
            <div className="mx-auto h-20 w-20 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner mb-6 mt-4 ring-1 ring-blue-100/50">
              <Monitor className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900 mb-3">Windows (.exe)</h3>
            <p className="text-slate-600 mb-8 mx-auto text-sm leading-relaxed">
              Десктопная версия. Удобная работа за компьютером или ноутбуком.
            </p>
            <a href="/downloads/moloko-pro-setup.exe" download="moloko-pro-setup.exe" className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
              Скачать для Windows
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Web */}
          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 text-center ring-1 ring-white/20 transition-all hover:-translate-y-2 hover:bg-white/15">
            <div className="mx-auto h-20 w-20 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/10 mb-6">
              <Globe className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-3">Web-версия</h3>
            <p className="text-blue-100 mb-8 mx-auto text-sm leading-relaxed">
              Работает в браузере без установок (доступно как PWA).
            </p>
            <a href="#" className="w-full flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-4 rounded-xl font-bold transition-colors">
              Открыть Web App
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
