
import React, { useRef, useLayoutEffect, useMemo } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProductModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // PREMIUM MATERIAL DEFINITIONS
  const materials = useMemo(() => ({
    aluminum: new THREE.MeshStandardMaterial({
      color: '#444444', // Lighter for visibility
      roughness: 0.5,
      metalness: 0.6,
      name: 'Anodized Aluminum'
    }),
    fabric: new THREE.MeshStandardMaterial({
      color: '#1a1a1a',
      roughness: 0.9,
      metalness: 0,
      name: 'Textile'
    }),
    silicone: new THREE.MeshStandardMaterial({
      color: '#0a0a0a',
      roughness: 0.8,
      metalness: 0.1,
      name: 'Silicone'
    })
  }), []);

  useLayoutEffect(() => {
    if (!groupRef.current) return;

    const ctx = gsap.context(() => {
      // 1. INTRO SEQUENCE: Zoom out + Rotate
      // Starts very close to the lens and pulls back while spinning
      const introTl = gsap.timeline();
      
      introTl.fromTo(groupRef.current!.position,
        { z: 4, y: 0.2 },
        { z: 0, y: 0, duration: 2.8, ease: "power3.inOut" }
      );
      
      introTl.fromTo(groupRef.current!.rotation,
        { y: -Math.PI * 2, x: 0.3 },
        { y: 0, x: 0, duration: 3.2, ease: "power2.out" },
        "<"
      );

      // 2. SCROLL ANIMATIONS
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#scroll-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          immediateRender: false,
        }
      });

      // Section 2: Show Aluminum Finish (Rotation)
      scrollTl.to(groupRef.current!.rotation, 
        { y: Math.PI * 0.7, duration: 1.5, ease: 'power1.inOut' }
      );

      // Section 3: Show Cushions (Tilt)
      scrollTl.to(groupRef.current!.rotation, 
        { x: 0.6, y: Math.PI * 0.3, duration: 1.5, ease: 'power1.inOut' }, 
        '>'
      );

      // Section 4: Deep Zoom (Detail)
      scrollTl.to(groupRef.current!.position, 
        { z: 2.5, y: -0.2, duration: 1.5, ease: 'power1.inOut' }, 
        '>'
      );

      // Section 5: Reset to Hero
      scrollTl.to(groupRef.current!.rotation, 
        { x: 0, y: 0, duration: 2, ease: 'power2.inOut' }, 
        '>'
      );
      scrollTl.to(groupRef.current!.position, 
        { x: 0, y: 0, z: 0, duration: 2, ease: 'power2.inOut' }, 
        '<'
      );
    });

    return () => ctx.revert();
  }, []);

  /**
   * NOTE: TO USE YOUR FBX LATER:
   * 1. Import { useFBX } from '@react-three/drei'
   * 2. const fbx = useFBX('model.fbx')
   * 3. Replace the children of <group ref={groupRef}> with <primitive object={fbx} />
   */

  return (
    <group ref={groupRef} dispose={null}>
      {/* Headband Structure */}
      <mesh material={materials.aluminum} castShadow receiveShadow position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.045, 16, 100, Math.PI]} />
      </mesh>

      {/* Left Cup Assembly */}
      <group position={[-0.8, 0, 0]}>
        <mesh material={materials.aluminum} castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.32, 0.35, 0.18, 48]} />
        </mesh>
        <mesh material={materials.fabric} castShadow receiveShadow position={[0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.26, 0.09, 20, 100]} />
        </mesh>
        <mesh material={materials.silicone} castShadow receiveShadow position={[0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
        </mesh>
      </group>

      {/* Right Cup Assembly */}
      <group position={[0.8, 0, 0]}>
        <mesh material={materials.aluminum} castShadow receiveShadow rotation={[0, 0, -Math.PI / 2]}>
          <cylinderGeometry args={[0.32, 0.35, 0.18, 48]} />
        </mesh>
        <mesh material={materials.fabric} castShadow receiveShadow position={[-0.05, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <torusGeometry args={[0.26, 0.09, 20, 100]} />
        </mesh>
        <mesh material={materials.silicone} castShadow receiveShadow position={[-0.05, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
        </mesh>
      </group>

      {/* Hinge Details */}
      <mesh material={materials.silicone} position={[-0.78, 0.45, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.5, 12]} />
      </mesh>
      <mesh material={materials.silicone} position={[0.78, 0.45, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.5, 12]} />
      </mesh>
    </group>
  );
};
