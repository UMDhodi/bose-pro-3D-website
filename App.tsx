
import React, { useState, useEffect } from 'react';
import { Scene } from './components/Scene';
import { ScrollOverlay } from './components/ScrollOverlay';
import { OrderOverlay } from './components/OrderOverlay';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading for the cinematic feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full bg-[#050505]">
      {isLoading && <LoadingScreen />}
      
      {/* Fixed 3D Scene Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>

      {/* Scrollable Content Layer */}
      {!isLoading && (
        <div className="relative z-10 animate-[fadeIn_2s_ease-out]">
          <ScrollOverlay onOrderClick={() => setIsOrdering(true)} />
        </div>
      )}

      {/* Persistent Footer Logo */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none transition-opacity hover:opacity-100 z-20">
        <p className="text-[10px] tracking-[0.5em] uppercase font-light">BOSE PRO</p>
      </div>

      {/* Order Modal */}
      {isOrdering && <OrderOverlay onClose={() => setIsOrdering(false)} />}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </main>
  );
};

export default App;
