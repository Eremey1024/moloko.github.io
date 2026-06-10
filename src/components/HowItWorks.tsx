import { Database, Settings, Activity, Send } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Добавление базы',
    description: 'Импортируйте поставщиков заранее или быстро добавляйте новых вручную.',
    icon: Database,
  },
  {
    id: 2,
    title: 'Настройка ведомости',
    description: 'Укажите название маршрута (ведомости) и e-mail получателя отчетов.',
    icon: Settings,
  },
  {
    id: 3,
    title: 'Ввод показателей',
    description: 'Укажите жирность, белок, плотность, ТТН и гос. номер автомобиля.',
    icon: Activity,
  },
  {
    id: 4,
    title: 'Быстрая отправка',
    description: 'Настройте SMTP (просто e-mail и пароль) и отправляйте готовые Excel/XML в один клик.',
    icon: Send,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl drop-shadow-sm">
            Как начать работу
          </h2>
          <p className="mt-4 text-lg text-[#64748B] font-medium">
            Процесс запуска занимает несколько простых шагов без сложного обучения.
          </p>
        </div>
        
        <div className="bg-blue-600 rounded-[32px] p-8 md:p-12 text-white max-w-5xl mx-auto shadow-2xl">
          <h3 className="font-black text-2xl mb-8 uppercase tracking-tight italic text-center">Как начать?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative group">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-400/50 flex-shrink-0 flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-white">{step.title}</h4>
                    <p className="text-blue-100 text-sm leading-tight">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
