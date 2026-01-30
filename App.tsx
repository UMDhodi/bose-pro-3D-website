import React, { useState, useEffect } from 'react';
import { Scene } from './components/Scene';
import { ScrollOverlay } from './components/ScrollOverlay';
import { OrderOverlay } from './components/OrderOverlay';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full bg-[#050505]">
      {isLoading && <LoadingScreen />}
      
      {/* PASS isLoading TO SCENE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene isLoading={isLoading} />
      </div>

      {!isLoading && (
        <div className="relative z-10 animate-[fadeIn_2s_ease-out]">
          <ScrollOverlay onOrderClick={() => setIsOrdering(true)} />
        </div>
      )}

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none transition-opacity hover:opacity-100 z-20">
        <p className="text-[10px] tracking-[0.5em] uppercase font-light">BOSE PRO</p>
      </div>

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