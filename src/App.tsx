import { useState } from 'react';
import { Language } from './data/i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-punjab-cream">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <InfoBar lang={lang} />
      <MenuSection lang={lang} />
      <About lang={lang} />
      <Reviews lang={lang} />
      <Gallery lang={lang} />
      <Location lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
      <FloatingButtons lang={lang} />
    </div>
  );
}

export default App;
