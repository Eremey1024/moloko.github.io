import { Droplet } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Молоко-Про</span>
            <div className="w-10 h-10 bg-[#2563EB] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Droplet className="h-6 w-6" fill="currentColor" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-black tracking-tight uppercase text-slate-900">Молоко<span className="text-[#2563EB]">-Про</span></span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#features" className="font-semibold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors">Возможности</a>
          <a href="#how-it-works" className="font-semibold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors">Как начать работу</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#download" className="bg-white px-5 py-2 rounded-full border-2 border-blue-100 shadow-sm font-semibold text-sm uppercase tracking-wider hover:bg-blue-50 transition-colors">
            Скачать <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
