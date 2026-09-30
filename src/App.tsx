import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import SubNav from './components/SubNav';
import About from './components/About';
import CTAPurple from './components/CTAPurple';
import CTACyan from './components/CTACyan';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 selection:bg-orange-500 selection:text-white">
      {/* 1. Navigation and Hero Section */}
      <Hero />

      {/* 2. Sponsors Component */}
      <Sponsors />

      {/* 3. Sub-navigation Banner */}
      <SubNav />

      {/* 4. About & Details Section */}
      <About />

      {/* 5. Call to Action: Purple Section */}
      <CTAPurple />

      {/* 6. Call to Action: Cyan Section */}
      <CTACyan />

      {/* 7. Dark Footer */}
      <Footer />
    </div>
  );
}
