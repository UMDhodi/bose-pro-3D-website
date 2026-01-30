
import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-1000">
      <div className="flex flex-col items-center gap-12 w-full max-w-[200px]">
        <div className="text-white font-semibold tracking-[0.5em] text-sm animate-pulse">
          BOSE PRO
        </div>
        <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-white animate-[lineGrow_2.5s_ease-in-out_forwards]" 
            style={{ width: '0%' }}
          />
        </div>
        <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-light italic">
          Calibrating Acoustic Space
        </div>
      </div>
    </div>
  );
};
