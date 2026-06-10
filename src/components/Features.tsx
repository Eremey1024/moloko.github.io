import { 
  CloudOff, Search, Scale, FileSpreadsheet, 
  LineChart, Beaker
} from 'lucide-react';

const features = [
  {
    name: 'Офлайн-режим',
    description: 'Работа без интернета. Локальная база сохраняет введенные данные и синхронизирует их при появлении сети.',
    icon: CloudOff,
  },
  {
    name: 'Быстрый ввод',
    description: 'Умный поиск поставщиков по ФИО или номеру, плюс специальная расширенная клавиатура для удобного ввода цифр.',
    icon: Search,
  },
  {
    name: 'Авто-конвертация',
    description: 'Система избавляет от ручных расчетов: автоматический пересчет собранных литров в килограммы по плотности.',
    icon: Scale,
  },
  {
    name: 'Генерация документов',
    description: 'Автоматическое формирование Excel-ведомостей и XML-файлов отчетности, готовых для загрузки в Меркурий.',
    icon: FileSpreadsheet,
  },
  {
    name: 'Встроенная аналитика',
    description: 'Наглядный график динамики сдачи молока для каждого поставщика и маршрута за последние 30 дней.',
    icon: LineChart,
  },
  {
    name: 'Качественные показатели',
    description: 'Полный учет параметров: номер ТТН, гос. номера авто, жирность, содержание белка и кислотность в итоговых отчетах.',
    icon: Beaker,
  },
];

export default function Features() {
  return (
    <section className="py-24 md:py-32 relative z-10" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase">Возможности платформы</h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl text-balance drop-shadow-sm">
            Главные инструменты управления
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white group transition-all hover:shadow-md">
              <div className="text-[#2563EB] mb-4">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feature.name}</h3>
              <p className="text-sm text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
