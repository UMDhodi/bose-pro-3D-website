
import React from 'react';

interface ScrollOverlayProps {
  onOrderClick: () => void;
}

export const ScrollOverlay: React.FC<ScrollOverlayProps> = ({ onOrderClick }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="scroll-container" className="relative w-full">
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-10 z-50 mix-blend-difference pointer-events-auto">
        <button onClick={() => scrollToSection('hero')} className="text-white font-semibold tracking-tighter text-xl">BOSE PRO</button>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
          <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">Overview</button>
          <button onClick={() => scrollToSection('tech-specs')} className="hover:text-white transition-colors">Tech Specs</button>
          <button onClick={() => scrollToSection('design')} className="hover:text-white transition-colors">Design</button>
          <button 
            onClick={onOrderClick}
            className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-[100vh] flex flex-col justify-center items-center px-10 pointer-events-none">
        <div className="text-center max-w-4xl space-y-4">
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-none opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            Immersive Sound.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            The new standard in acoustic engineering.
          </p>
        </div>
      </section>

      {/* Section 2: Rotation Reveal (Design) */}
      <section id="design" className="h-[100vh] flex items-center justify-start px-20 md:px-40 pointer-events-none">
        <div className="max-w-md space-y-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
            Anodized Finish.
          </h2>
          <p className="text-lg text-white/40 leading-relaxed font-light">
            Engineered from a single piece of aerospace-grade aluminum. Precision-milled for weight and rigidity.
          </p>
        </div>
      </section>

      {/* Section 3: Material Focus */}
      <section className="h-[100vh] flex items-center justify-end px-20 md:px-40 pointer-events-none text-right">
        <div className="max-w-md space-y-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
            Total Comfort.
          </h2>
          <p className="text-lg text-white/40 leading-relaxed font-light">
            A custom-designed mesh textile wraps the ear cushions to provide pillow-like softness while you listen.
          </p>
        </div>
      </section>

      {/* Section 4: Close Up / Detail */}
      <section className="h-[100vh] flex items-center justify-center px-10 pointer-events-none">
        <div className="text-center max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
            The Science of Silence.
          </h2>
          <p className="text-lg text-white/40 leading-relaxed font-light">
            Computationally driven noise cancellation. Silence that feels natural.
          </p>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section id="tech-specs" className="min-h-screen bg-black/40 backdrop-blur-sm flex flex-col justify-center py-40 px-10 md:px-40">
        <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-20 text-white/90">Tech Specs.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/30">Audio Technology</h3>
            <ul className="space-y-2 text-white/70 font-light">
              <li>Custom-designed dynamic driver</li>
              <li>Active Noise Cancellation</li>
              <li>Aware mode</li>
              <li>Immersive Audio support</li>
              <li>Adaptive EQ</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/30">Sensors</h3>
            <ul className="space-y-2 text-white/70 font-light">
              <li>On-head detection (each ear cup)</li>
              <li>Position sensor (each ear cup)</li>
              <li>Case-detect sensor</li>
              <li>Accelerometer (each ear cup)</li>
              <li>Gyroscope (left ear cup)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/30">Battery</h3>
            <ul className="space-y-2 text-white/70 font-light">
              <li>Up to 24 hours of listening time</li>
              <li>15 minutes charge = 2.5 hours</li>
              <li>USB-C charging connector</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/30">Connectivity</h3>
            <ul className="space-y-2 text-white/70 font-light">
              <li>Bluetooth 5.3 wireless technology</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/30">Weight</h3>
            <ul className="space-y-2 text-white/70 font-light">
              <li>12.3 ounces (348.7 grams)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Conclusion / Call to Action */}
      <section className="h-[100vh] flex flex-col justify-center items-center px-10 pointer-events-none text-center">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter">
            BOSE PRO. In every way.
          </h2>
          <div className="flex flex-col items-center gap-4">
             <button 
              onClick={onOrderClick}
              className="pointer-events-auto bg-white text-black text-sm px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all scale-100 hover:scale-105"
             >
                Buy Now
             </button>
             <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Available in Black, White Smoke, and Blue Dusk</p>
          </div>
        </div>
      </section>

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
