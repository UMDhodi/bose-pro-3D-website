import React, { useRef, useLayoutEffect, useMemo } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFBX } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

interface ProductModelProps {
  isLoading: boolean;
}

export const ProductModel: React.FC<ProductModelProps> = ({ isLoading }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // 1. Load Model
  // This automatically adds "/bose-pro-3D-website/" when deployed
  const fbx = useFBX(import.meta.env.BASE_URL + '14.fbx');
  const scene = useMemo(() => fbx.clone(), [fbx]);

  useLayoutEffect(() => {
    if (isLoading || !groupRef.current) return;

    const ctx = gsap.context(() => {
      // INTRO: Fly in from front
      gsap.fromTo(groupRef.current!.position,
        { z: 5, y: -1 }, 
        { z: 0, y: 0, duration: 2.5, ease: "power3.out" }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#scroll-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub:  0.5,
        }
      });

      // --- SCROLL ANIMATIONS ---
      
      // 1. Rotate to side
      tl.to(groupRef.current!.rotation, { 
        y: Math.PI * 0.5, 
        duration: 2 
      });

      // 2. Tilt
      tl.to(groupRef.current!.rotation, { 
        x: 0.5, 
        duration: 2 
      });

      // 3. Zoom in (Detail Shot)
      tl.to(groupRef.current!.position, { 
        z: 3.5, // Closer zoom
        y: 0.5, // Slight move up to focus on details
        duration: 2 
      });

      // 4. Reset to Center
      tl.to(groupRef.current!.position, { 
        z: 0, 
        x: 0,
        y: 0,
        duration: 2 
      });
      tl.to(groupRef.current!.rotation, { 
        x: 0, 
        y: 0, 
        duration: 2 
      }, "<");
      
    });

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <group ref={groupRef} dispose={null}>
      <primitive 
        object={scene} 
        // --- FIXES ARE HERE ---
        scale={0.13}             // Slightly smaller to fit comfortably
        position={[0, -1.0, 0]}  // Moved DOWN by 1.5 units to center it
        rotation={[0, -Math.PI/2, 0]} 
      />
    </group>
  );
};