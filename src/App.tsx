import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#1E3A8A] font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
