import { CloudOff, MonitorSmartphone } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 relative relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Работает везде, где вам удобно
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed font-medium">
            Устанавливайте на Android-смартфоны для работы в полях без интернета, или используйте на Windows-ПК на пунктах приема (как десктопное или веб-приложение PWA).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-[#2563EB] bg-white shadow-sm border border-blue-50">
              <MonitorSmartphone className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-4 font-sans">Кроссплатформенность</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Единая система для любых устройств. Вы можете использовать мобильное приложение для выездных сборов или открыть полноценный интерфейс на компьютере оператора пункта приема. Все данные будут унифицированы.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute -right-10 -bottom-10 h-64 w-64 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-[#2563EB] bg-white shadow-sm border border-blue-50">
                <CloudOff className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4 font-sans">Полная офлайн-работа</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Нет интернета в деревне? Приложение имеет <span className="font-semibold text-slate-700">встроенную локальную базу данных</span>. Вся ежедневная рутина — поиск, расчет, добавление литров — работает без сети. Синхронизация происходит автоматически, как только появляется связь.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
