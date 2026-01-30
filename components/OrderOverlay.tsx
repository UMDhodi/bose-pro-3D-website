
import React, { useState } from 'react';

interface OrderOverlayProps {
  onClose: () => void;
}

export const OrderOverlay: React.FC<OrderOverlayProps> = ({ onClose }) => {
  const [step, setStep] = useState<'selection' | 'success'>('selection');

  const handleOrder = () => {
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl animate-[overlayIn_0.4s_ease-out]">
      <div className="relative w-full max-w-xl p-10 bg-[#111] rounded-3xl border border-white/10 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {step === 'selection' ? (
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">Customize your BOSE PRO.</h2>
              <p className="text-white/40">Select your finish and prepare for immersion.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-white/30">Finish</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Black', hex: '#111' },
                  { name: 'White Smoke', hex: '#f0f0f0' },
                  { name: 'Blue Dusk', hex: '#3a4a5a' }
                ].map((color) => (
                  <button 
                    key={color.name}
                    className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:bg-white/5"
                  >
                    <div className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: color.hex }} />
                    <span className="text-[10px] uppercase tracking-wider text-white/40 group-hover:text-white transition-colors">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">Total</p>
                <p className="text-2xl font-semibold">$549.00</p>
              </div>
              <button 
                onClick={handleOrder}
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95"
              >
                Complete Order
              </button>
            </div>
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">Your order is in.</h2>
              <p className="text-white/40">Check your email for confirmation. Welcome to the BOSE family.</p>
            </div>
            <button 
              onClick={onClose}
              className="px-8 py-3 border border-white/10 rounded-full text-sm font-medium hover:bg-white/5 transition-all"
            >
              Back to site
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes overlayIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(24px); }
        }
      `}</style>
    </div>
  );
};
