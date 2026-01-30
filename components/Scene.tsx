import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { ProductModel } from './ProductModel';

// Define the interface
interface SceneProps {
  isLoading: boolean;
}

export const Scene: React.FC<SceneProps> = ({ isLoading }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#252525] via-[#0c0c0c] to-[#050505]">
      <Canvas
        shadows
        gl={{ 
          antialias: true, 
          alpha: true, 
          stencil: false, 
          depth: true,
          toneMappingExposure: 1.2
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera 
            makeDefault 
            position={[0, 0, 5]} 
            fov={35}
          />
          
          <Environment preset="studio" />
          
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={4} castShadow />
          <pointLight position={[0, 5, -5]} intensity={3} color="#ffffff" />
          <pointLight position={[-8, 0, 5]} intensity={1.5} color="#ffffff" />
          <rectAreaLight width={15} height={15} intensity={0.8} position={[0, 0, 8]} />

          <ContactShadows opacity={0.4} scale={10} blur={2} far={4.5} resolution={256} color="#000000" />

          {/* PASS isLoading DOWN */}
          <ProductModel isLoading={isLoading} />
          <AdaptiveDpr pixelated />
        </Suspense>
      </Canvas>
    </div>
  );
};