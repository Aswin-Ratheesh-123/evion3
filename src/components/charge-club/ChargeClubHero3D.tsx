'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Sparkles, Shield, Zap, Award, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Procedural 3D Shield Badge with Lightning Cutout
function createShieldBadgeGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  // Luxury Shield Contour
  shape.moveTo(0, 2.3);
  shape.lineTo(1.6, 2.05);
  shape.quadraticCurveTo(1.85, 0.7, 1.45, -0.5);
  shape.quadraticCurveTo(0.9, -1.7, 0, -2.5);
  shape.quadraticCurveTo(-0.9, -1.7, -1.45, -0.5);
  shape.quadraticCurveTo(-1.85, 0.7, -1.6, 2.05);
  shape.closePath();

  // Dynamic Lightning Cutout
  const hole = new THREE.Path();
  hole.moveTo(0.15, 1.3);
  hole.lineTo(-0.75, 0.1);
  hole.lineTo(-0.08, 0.1);
  hole.lineTo(-0.45, -1.35);
  hole.lineTo(0.75, -0.1);
  hole.lineTo(0.08, -0.1);
  hole.closePath();

  shape.holes.push(hole);

  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: 0.38,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.08,
    bevelThickness: 0.08,
    curveSegments: 36,
  };

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.center();
  geom.computeVertexNormals();
  return geom;
}

// Inner Bezel / Rim Geometry for extra luxury depth
function createInnerRimGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(0, 2.15);
  shape.lineTo(1.45, 1.92);
  shape.quadraticCurveTo(1.7, 0.65, 1.32, -0.45);
  shape.quadraticCurveTo(0.8, -1.55, 0, -2.32);
  shape.quadraticCurveTo(-0.8, -1.55, -1.32, -0.45);
  shape.quadraticCurveTo(-1.7, 0.65, -1.45, 1.92);
  shape.closePath();

  const hole = new THREE.Path();
  hole.moveTo(0.2, 1.4);
  hole.lineTo(-0.82, 0.15);
  hole.lineTo(-0.05, 0.15);
  hole.lineTo(-0.5, -1.45);
  hole.lineTo(0.82, -0.05);
  hole.lineTo(0.05, -0.05);
  hole.closePath();
  shape.holes.push(hole);

  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: 0.42,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.04,
    bevelThickness: 0.04,
    curveSegments: 28,
  };

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.center();
  geom.computeVertexNormals();
  return geom;
}

export const ChargeClubHero3D: React.FC = () => {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const heroViewportRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // DOM animation refs
  const brandLockupRef = useRef<HTMLDivElement>(null);
  const leftWordRef = useRef<HTMLSpanElement>(null);
  const rightWordRef = useRef<HTMLSpanElement>(null);
  const brandSublineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // State 3 refs
  const headlineSectionRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLDivElement>(null);
  const headlineLine2Ref = useRef<HTMLDivElement>(null);
  const headlineLine3Ref = useRef<HTMLDivElement>(null);
  const headlineParagraphRef = useRef<HTMLParagraphElement>(null);
  const headlineBadgesRef = useRef<HTMLDivElement>(null);

  // Technical Specifications text layout refs (clean minimalist editorial text design)
  const specContainerRef = useRef<HTMLDivElement>(null);
  const specHeaderRef = useRef<HTMLDivElement>(null);
  const specDividerRef = useRef<HTMLDivElement>(null);
  const specRow1Ref = useRef<HTMLDivElement>(null);
  const specRow2Ref = useRef<HTMLDivElement>(null);
  const specRow3Ref = useRef<HTMLDivElement>(null);
  const specFooterRef = useRef<HTMLDivElement>(null);

  // Progress telemetry for the HUD
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Top telemetry HUD visibility state:
  // - Visible during Initial Hero (scrollProgress <= 12)
  // - Visible during Franchise Architecture section (scrollProgress >= 58 && scrollProgress <= 82)
  // - Smoothly hides on scroll up or when leaving the Franchise Architecture section (< 58)
  // - Hidden during transition stages (13% - 57%) to never overlap the large EXPAND CHARGING heading
  // - Hidden beyond hero (> 82) to avoid overlapping subsequent sections
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    setHasMounted(true);
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - lastScrollYRef.current;
          const threshold = 6;

          if (currentScrollY <= 60) {
            // Initial state at top of page
            setIsScrollingUp(false);
          } else if (diff < -threshold) {
            // Scrolling upward past threshold
            setIsScrollingUp(true);
          } else if (diff > threshold) {
            // Scrolling downward past threshold
            setIsScrollingUp(false);
          }

          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Section-based visibility:
  // Active only during Initial Hero Entry (<= 12%) OR Franchise Architecture (58% - 82%)
  const isSectionActive =
    scrollProgress <= 12 || (scrollProgress >= 58 && scrollProgress <= 82);

  // Bar is visible only when the section is active AND user is not scrolling upward away
  const isTelemetryBarShown = isSectionActive && !isScrollingUp;

  useEffect(() => {
    if (!canvasContainerRef.current || !heroViewportRef.current || !heroWrapperRef.current) return;

    // --- THREE.JS SCENE SETUP ---
    const scene = new THREE.Scene();

    const width = canvasContainerRef.current.clientWidth || window.innerWidth;
    const height = canvasContainerRef.current.clientHeight || window.innerHeight;
    const isMobileView = width < 768;
    const isTabletView = width >= 768 && width < 1024;

    const camera = new THREE.PerspectiveCamera(
      isMobileView ? 55 : isTabletView ? 48 : 42,
      width / height,
      0.1,
      100
    );
    camera.position.set(0, 0, isMobileView ? 8.2 : isTabletView ? 7.0 : 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      premultipliedAlpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    canvasContainerRef.current.appendChild(renderer.domElement);

    // Procedural Studio Environment for realistic edge glints
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(roomEnv).texture;
    scene.environment = envTexture;

    // Lighting
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
    keyLight.position.set(5, 7, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x40e0d0, 2.5);
    fillLight.position.set(-5, -4, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xe2e8f0, 2.8);
    rimLight.position.set(-6, 6, -3);
    scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0x40e0d0, 2.0, 12);
    bottomGlow.position.set(0, -3, 2);
    scene.add(bottomGlow);

    // --- MATERIALS ---
    // Physical metallic brushed EVION Turquoise
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#40E0D0'),
      emissive: new THREE.Color('#002B28'),
      metalness: 0.94,
      roughness: 0.20,
      clearcoat: 0.55,
      clearcoatRoughness: 0.1,
      reflectivity: 0.96,
      envMapIntensity: 2.8,
    });

    // Darker reflective turquoise accent rim
    const brassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#20B2AA'),
      emissive: new THREE.Color('#001F1D'),
      metalness: 0.98,
      roughness: 0.22,
      clearcoat: 0.4,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
      envMapIntensity: 2.2,
    });

    // Outer glow rim
    const glowingCoreMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#40E0D0'),
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const badgeGeom = createShieldBadgeGeometry();
    const rimGeom = createInnerRimGeometry();

    // TOKEN 1 (Primary, Larger Token)
    const token1Group = new THREE.Group();
    const token1Mesh = new THREE.Mesh(badgeGeom, goldMaterial);
    const token1Rim = new THREE.Mesh(rimGeom, brassMaterial);
    token1Rim.scale.set(0.94, 0.94, 1.05);
    token1Group.add(token1Mesh);
    token1Group.add(token1Rim);
    scene.add(token1Group);

    // TOKEN 2 (Secondary, Floating Antigravity Token)
    const token2Group = new THREE.Group();
    const token2Mesh = new THREE.Mesh(badgeGeom, goldMaterial);
    const token2Rim = new THREE.Mesh(rimGeom, brassMaterial);
    token2Rim.scale.set(0.94, 0.94, 1.05);
    token2Group.add(token2Mesh);
    token2Group.add(token2Rim);
    scene.add(token2Group);

    // Initial state: tokens start hidden/small behind center typography
    token1Group.scale.setScalar(0.001);
    token1Group.position.set(0, 0, -4.5);
    token2Group.scale.setScalar(0.001);
    token2Group.position.set(0, 0, -5.5);

    // Token transformation animation state container for GSAP
    const tState = {
      // Token 1
      t1X: 0,
      t1Y: 0,
      t1Z: -4.5,
      t1RotX: 0,
      t1RotY: 0,
      t1RotZ: 0,
      t1Scale: 0.001,
      t1Opacity: 0,

      // Token 2
      t2X: 0,
      t2Y: 0,
      t2Z: -5.5,
      t2RotX: 0,
      t2RotY: 0,
      t2RotZ: 0,
      t2Scale: 0.001,
      t2Opacity: 0,
    };

    // Parallax mouse tracker
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!canvasContainerRef.current) return;
      const w = canvasContainerRef.current.clientWidth || window.innerWidth;
      const h = canvasContainerRef.current.clientHeight || window.innerHeight;
      const mobile = w < 768;
      const tablet = w >= 768 && w < 1024;

      camera.aspect = w / h;
      if (mobile) {
        camera.fov = 55;
        camera.position.z = 8.2;
      } else if (tablet) {
        camera.fov = 48;
        camera.position.z = 7.0;
      } else {
        camera.fov = 42;
        camera.position.z = 6.2;
      }
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // --- GSAP SCROLLTRIGGER MULTI-STAGE MASTER TIMELINE ---
    // Targets responsive positions
    const isNarrow = window.innerWidth < 1024;
    const isMobile = window.innerWidth < 640;
    const t1FinalX = isNarrow ? (isMobile ? 0.15 : 0.3) : 1.35;
    const t1FinalY = isNarrow ? (isMobile ? -0.2 : -0.4) : 0.0;
    const t2FinalX = isNarrow ? (isMobile ? 0.95 : 1.4) : 2.55;
    const t2FinalY = isNarrow ? (isMobile ? 1.25 : 1.6) : 1.75;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroWrapperRef.current,
          start: 'top top',
          end: '+=350%',
          pin: heroViewportRef.current,
          pinSpacing: true,
          invalidateOnRefresh: true,
          scrub: 1.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            setScrollProgress(Math.round(self.progress * 100));
          },
        },
      });

    // Timeline Setup: Total duration = 100 units
    // State 1: 0% - 15% (Initial Entry)
    // Center brand lockup visible, tokens small/hidden
    masterTl.set(tState, {
      t1Scale: 0.001,
      t1Z: -4.5,
      t1X: 0,
      t1Y: 0,
      t2Scale: 0.001,
      t2Z: -5.5,
      t2X: 0,
      t2Y: 0,
    });

    // Ensure State 3 elements are completely hidden during State 1 & 2
    masterTl.set(
      [
        headlineLine1Ref.current,
        headlineLine2Ref.current,
        headlineLine3Ref.current,
        headlineParagraphRef.current,
        headlineBadgesRef.current,
        specContainerRef.current,
      ],
      { opacity: 0 }
    );

    // Hold state 1 slightly (0 -> 12)
    masterTl.to(
      scrollIndicatorRef.current,
      {
        opacity: 0,
        y: 15,
        duration: 10,
        ease: 'power2.in',
      },
      5
    );

    // State 2: 15% - 45% (The Ejection / Split)
    // Center text splits horizontally and fades back smoothly
    masterTl.to(
      leftWordRef.current,
      {
        x: isMobile ? -50 : isNarrow ? -140 : -320,
        opacity: 0,
        scale: 0.88,
        filter: 'blur(8px)',
        duration: 25,
        ease: 'power2.inOut',
      },
      15
    );

    masterTl.to(
      rightWordRef.current,
      {
        x: isMobile ? 50 : isNarrow ? 140 : 320,
        opacity: 0,
        scale: 0.88,
        filter: 'blur(8px)',
        duration: 25,
        ease: 'power2.inOut',
      },
      15
    );

    masterTl.to(
      brandSublineRef.current,
      {
        opacity: 0,
        y: -20,
        filter: 'blur(4px)',
        duration: 15,
        ease: 'power2.inOut',
      },
      15
    );

    // Token 1 flies forward with slight 3D yaw/pitch tilt (~15-20° toward camera)
    masterTl.to(
      tState,
      {
        t1Scale: 1.05,
        t1Z: 1.55,
        t1X: t1FinalX,
        t1Y: t1FinalY,
        t1RotX: -0.32, // ~18.3° pitch tilted toward camera
        t1RotY: 0.38,  // ~21.7° yaw
        t1RotZ: -0.08,
        duration: 30,
        ease: 'power3.out',
      },
      15
    );

    // Token 2 floats upward and to the top-right, rotating slowly on Z and Y axes with zero-g feel
    masterTl.to(
      tState,
      {
        t2Scale: 0.44,
        t2Z: -0.3,
        t2X: t2FinalX,
        t2Y: t2FinalY,
        t2RotX: 0.22,
        t2RotY: 1.85,
        t2RotZ: 0.65,
        duration: 30,
        ease: 'power3.out',
      },
      17
    );

    // State 3: 45% - 75% (Hero Message Reveal)
    // Bold stacked headline fades and slides into view on the left
    masterTl.set(headlineSectionRef.current, { opacity: 1, y: 0, filter: 'blur(0px)' }, 45);

    masterTl.fromTo(
      headlineLine1Ref.current,
      { opacity: 0, x: isMobile ? -30 : -70, filter: 'blur(8px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 14, ease: 'power2.out' },
      45
    );

    masterTl.fromTo(
      headlineLine2Ref.current,
      { opacity: 0, x: isMobile ? -30 : -70, filter: 'blur(8px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 14, ease: 'power2.out' },
      49
    );

    masterTl.fromTo(
      headlineLine3Ref.current,
      { opacity: 0, x: isMobile ? -30 : -70, filter: 'blur(8px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 14, ease: 'power2.out' },
      53
    );

    masterTl.fromTo(
      headlineBadgesRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 14, ease: 'power2.out' },
      58
    );

    masterTl.fromTo(
      headlineParagraphRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 12, ease: 'power2.out' },
      56
    );

    // Fade in spec container
    masterTl.to(
      specContainerRef.current,
      { opacity: 1, duration: 10, ease: 'power2.out' },
      47
    );

    // State 3: Technical Specifications text entrance
    // Animate text elements individually with subtle fade-in, small upward movement, and slight stagger
    masterTl.fromTo(
      specHeaderRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 12, ease: 'power2.out' },
      47
    );

    masterTl.fromTo(
      specDividerRef.current,
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 12, ease: 'power2.out' },
      49
    );

    masterTl.fromTo(
      specRow1Ref.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 10, ease: 'power2.out' },
      51
    );

    masterTl.fromTo(
      specRow2Ref.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 10, ease: 'power2.out' },
      54
    );

    masterTl.fromTo(
      specRow3Ref.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 10, ease: 'power2.out' },
      57
    );

    masterTl.fromTo(
      specFooterRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 12, ease: 'power2.out' },
      60
    );

    // Tokens settle into floating idle positions with subtle yaw adjustment
    masterTl.to(
      tState,
      {
        t1RotX: -0.28,
        t1RotY: 0.28,
        t1Z: 1.35,
        duration: 25,
        ease: 'sine.inOut',
      },
      45
    );

    // State 4: 75% - 100% (Transition to Content)
    // Stacked headline & golden lattice fade out and glide upward
    masterTl.to(
      headlineSectionRef.current,
      {
        opacity: 0,
        y: -60,
        filter: 'blur(8px)',
        duration: 20,
        ease: 'power2.in',
      },
      78
    );

    masterTl.to(
      specContainerRef.current,
      {
        opacity: 0,
        y: -30,
        duration: 18,
        ease: 'power2.in',
      },
      80
    );

    // The tokens scale down and glide smoothly out of view (tucking down into bottom badge)
    masterTl.to(
      tState,
      {
        t1Scale: 0.12,
        t1Y: -3.8,
        t1Z: -2.5,
        t1RotX: 0.5,
        duration: 22,
        ease: 'power3.in',
      },
      78
    );

    masterTl.to(
      tState,
      {
        t2Scale: 0.06,
        t2Y: -4.0,
        t2Z: -3.0,
        duration: 20,
        ease: 'power3.in',
      },
      80
    );
    }, heroWrapperRef);

    // Refresh ScrollTrigger once web fonts are fully ready to prevent font-swap layout shifts
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    // --- ANIMATION RENDER LOOP WITH PHYSICS-BASED HOVERING BOB ---
    const startTime = performance.now();
    let animFrameId: number;

    const render = () => {
      const elapsed = (performance.now() - startTime) * 0.001;

      // Mouse Parallax Lerping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Physics-based zero-g hovering bob (operates continuously at idle)
      const bobT1Y = Math.sin(elapsed * 1.7) * 0.07;
      const bobT1RotX = Math.cos(elapsed * 1.3) * 0.025;
      const bobT1RotY = Math.sin(elapsed * 1.1) * 0.025;

      const bobT2Y = Math.sin(elapsed * 2.1 + 1.2) * 0.09;
      const bobT2RotX = Math.cos(elapsed * 1.5) * 0.04;
      const bobT2RotZ = Math.sin(elapsed * 1.8) * 0.04;

      // Primary Token 1 Updates
      token1Group.position.x = tState.t1X + mouseX * 0.35;
      token1Group.position.y = tState.t1Y + bobT1Y - mouseY * 0.25;
      token1Group.position.z = tState.t1Z;
      token1Group.rotation.x = tState.t1RotX + bobT1RotX - mouseY * 0.15;
      token1Group.rotation.y = tState.t1RotY + bobT1RotY + mouseX * 0.25;
      token1Group.rotation.z = tState.t1RotZ;
      token1Group.scale.setScalar(tState.t1Scale);

      // Secondary Token 2 Updates (Antigravity float with slow continuous rotational spin)
      token2Group.position.x = tState.t2X + mouseX * 0.2;
      token2Group.position.y = tState.t2Y + bobT2Y - mouseY * 0.15;
      token2Group.position.z = tState.t2Z;
      token2Group.rotation.x = tState.t2RotX + bobT2RotX;
      token2Group.rotation.y = tState.t2RotY + elapsed * 0.22; // subtle continuous float
      token2Group.rotation.z = tState.t2RotZ + bobT2RotZ;
      token2Group.scale.setScalar(tState.t2Scale);

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(render);
    };

    render();

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      ctx.revert();

      // Dispose Three.js objects
      badgeGeom.dispose();
      rimGeom.dispose();
      goldMaterial.dispose();
      brassMaterial.dispose();
      glowingCoreMaterial.dispose();
      roomEnv.dispose();
      pmremGenerator.dispose();
      envTexture.dispose();
      renderer.dispose();

      if (canvasContainerRef.current && renderer.domElement) {
        canvasContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={heroWrapperRef}
      className="relative w-full bg-[#0D0D11] text-[#FFFFFF] overflow-clip"
      style={{ minHeight: '350vh' }}
    >
      {/* Pinned Hero Viewport (100vh pinned stage) */}
      <div
        ref={heroViewportRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0D0D11] flex flex-col justify-between"
      >
        {/* Subtle Turquoise Radial Ambient Glows in Corners */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 10% 15%, rgba(64, 224, 208, 0.10) 0%, transparent 45%),
              radial-gradient(circle at 90% 85%, rgba(64, 224, 208, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(13, 13, 17, 0.7) 0%, #0D0D11 100%)
            `,
          }}
        />

        {/* Subtle Luxury Film Grain & Scanline Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(64, 224, 208, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(64, 224, 208, 0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* High Performance Three.js Canvas Container */}
        <div
          ref={canvasContainerRef}
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Top Header Bar / Status HUD */}
        <div
          style={{
            transition: hasMounted
              ? 'opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 300ms cubic-bezier(0.16, 1, 0.3, 1), visibility 300ms cubic-bezier(0.16, 1, 0.3, 1)'
              : 'none',
          }}
          className={`relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 pt-16 sm:pt-22 md:pt-28 flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-normal sm:tracking-widest uppercase will-change-transform ${
            isTelemetryBarShown
              ? 'opacity-100 translate-y-0 pointer-events-auto visible'
              : 'opacity-0 -translate-y-[110%] pointer-events-none invisible'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#40E0D0] animate-pulse shadow-[0_0_10px_#40E0D0] shrink-0" />
            <span className="text-[#40E0D0] font-semibold text-[10px] sm:text-xs tracking-wider whitespace-nowrap">EVION FRANCHISE</span>
            <span className="text-[#FFFFFF]/30 hidden md:inline">|</span>
            <span className="text-[#FFFFFF]/60 hidden md:inline">COMMERCIAL EV PARTNERSHIP</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-[#FFFFFF]/50">
            <span className="hidden md:inline font-mono text-[10px] text-[#40E0D0]/80 border border-[#40E0D0]/30 px-2 py-0.5 rounded-full bg-[#40E0D0]/5">
              SCROLL TELEMETRY: {scrollProgress}%
            </span>
            <div className="flex items-center gap-1.5 text-[#40E0D0] shrink-0">
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#40E0D0] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider whitespace-nowrap">FRANCHISE ARCHITECTURE</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STATE 1 & 2: CENTER BRAND LOCKUP (EVION FRANCHISE METALLIC SILVER CHROME)
            ========================================================================= */}
        <div
          ref={brandLockupRef}
          className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none my-auto"
        >
          <div className="relative flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 max-w-full text-center">
            {/* Split Word Left: "EVION" */}
            <span
              ref={leftWordRef}
              className="inline-block text-[clamp(1.65rem,7.5vw,5.5rem)] md:text-8xl lg:text-9xl font-black tracking-tight uppercase leading-[1.05]"
              style={{
                background:
                  'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 35%, #94A3B8 70%, #CBD5E1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.85)) drop-shadow(0 0 40px rgba(255,255,255,0.15))',
              }}
            >
              EVION
            </span>

            {/* Split Word Right: "FRANCHISE" */}
            <span
              ref={rightWordRef}
              className="inline-block text-[clamp(1.65rem,7.5vw,5.5rem)] md:text-8xl lg:text-9xl font-black tracking-tight uppercase leading-[1.05]"
              style={{
                background:
                  'linear-gradient(180deg, #F8FAFC 0%, #D4D4D8 35%, #A1A1AA 70%, #E4E4E7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.85)) drop-shadow(0 0 40px rgba(255,255,255,0.15))',
              }}
            >
              FRANCHISE
            </span>
          </div>

          {/* Luxury Metallic Subline */}
          <div
            ref={brandSublineRef}
            className="mt-3 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono tracking-[0.12em] sm:tracking-[0.25em] uppercase text-[#40E0D0]/90 px-2 max-w-full"
          >
            <span className="flex items-center gap-2 text-center">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#40E0D0] shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm font-medium">POWER YOUR FUTURE WITH EVION.</span>
            </span>
            <span className="hidden md:inline text-[#FFFFFF]/30 mx-2">•</span>
            <span className="hidden md:inline text-[#FFFFFF]/70 tracking-widest text-[11px]">
              SCROLL TO EXPLORE FRANCHISE OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* =========================================================================
            STATE 3: HERO MESSAGE REVEAL (LEFT STACKED HEADLINE)
            ========================================================================= */}
        <div
          ref={headlineSectionRef}
          className="absolute inset-0 z-20 pointer-events-none flex items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-36 pb-8 sm:pb-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-8 sm:pt-12 md:pt-14">
            

            {/* Stacked Bold Headline */}
            <div className="space-y-1 sm:space-y-2">
              <div
                ref={headlineLine1Ref}
                className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#FFFFFF] uppercase leading-none drop-shadow-xl opacity-0"
                style={{ opacity: 0 }}
              >
                EXPAND CHARGING.
              </div>
              <div
                ref={headlineLine2Ref}
                className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none opacity-0"
                style={{
                  opacity: 0,
                  background:
                    'linear-gradient(135deg, #FFFFFF 0%, #40E0D0 50%, #20B2AA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 4px 20px rgba(64, 224, 208, 0.3))',
                }}
              >
                BUILD REVENUE.
              </div>
              <div
                ref={headlineLine3Ref}
                className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#FFFFFF] uppercase leading-none drop-shadow-xl opacity-0"
                style={{ opacity: 0 }}
              >
                GROW WITH EVION.
              </div>
            </div>

            {/* Value Proposition Micro Text & Badges */}
            <p
              ref={headlineParagraphRef}
              className="mt-4 sm:mt-6 text-xs sm:text-base text-[#FFFFFF]/70 max-w-md font-sans leading-relaxed opacity-0"
              style={{ opacity: 0 }}
            >
              Partner with EVION to bring intelligent electric vehicle charging solutions to more locations. Join our growing network and explore franchise opportunities in the expanding electric mobility industry.
            </p>

            <div
              ref={headlineBadgesRef}
              className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4 pointer-events-auto opacity-0"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#FFFFFF]/5 backdrop-blur-md border border-[#40E0D0]/20 text-[11px] sm:text-xs font-mono text-[#40E0D0]">
                <Shield className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#40E0D0]" />
                <span>350 KW TURNKEY DEPLOYMENT</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#FFFFFF]/5 backdrop-blur-md border border-[#FFFFFF]/10 text-[11px] sm:text-xs font-mono text-[#FFFFFF]/80">
                <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#40E0D0]" />
                <span>COMMERCIAL REVENUE SHARE</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STATE 3: TECHNICAL SPECIFICATIONS (CLEAN MINIMALIST EDITORIAL TEXT LAYOUT)
            ========================================================================= */}
        <div
          ref={specContainerRef}
          className="absolute bottom-6 right-4 sm:bottom-10 sm:right-8 lg:bottom-12 lg:right-16 z-20 pointer-events-none select-none w-[270px] sm:w-84 lg:w-96 text-left opacity-0"
          style={{ opacity: 0 }}
        >
          {/* Top Row: AURUM ARCHITECTURE (left) + REV. 2026 (right) */}
          <div
            ref={specHeaderRef}
            className="flex items-center justify-between pb-2"
          >
            <div className="flex items-center gap-2.5">
              {/* Subtle turquoise indicator beside the heading */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0] shadow-[0_0_8px_#40E0D0] inline-block" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#FFFFFF] font-medium uppercase">
                AURUM ARCHITECTURE
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase">
              REV. 2026
            </span>
          </div>

          {/* Thin turquoise line separating specifications from heading with subtle animated accent */}
          <div
            ref={specDividerRef}
            className="origin-left h-[1px] w-full bg-gradient-to-r from-[#40E0D0] via-[#40E0D0]/40 to-transparent relative overflow-hidden mb-4"
          >
            <span className="absolute inset-y-0 left-0 w-1/4 bg-[#40E0D0]/80" />
          </div>

          {/* Main Specifications: Labels left, Values right, consistent vertical spacing */}
          <div className="space-y-3 font-mono">
            {/* Row 1: THROUGHPUT RATIO -> 800V DC / 480KW MAX */}
            <div
              ref={specRow1Ref}
              className="flex justify-between items-baseline gap-4 text-[11px] sm:text-xs"
            >
              <span className="text-[#94A3B8] tracking-wider uppercase font-normal">
                THROUGHPUT RATIO
              </span>
              <span className="text-[#40E0D0] tracking-wider uppercase font-semibold text-right">
                800V DC / 480KW MAX
              </span>
            </div>

            {/* Row 2: RESERVED ALLOCATION -> BAY 04 / BAY 08 */}
            <div
              ref={specRow2Ref}
              className="flex justify-between items-baseline gap-4 text-[11px] sm:text-xs"
            >
              <span className="text-[#94A3B8] tracking-wider uppercase font-normal">
                RESERVED ALLOCATION
              </span>
              <span className="text-[#FFFFFF] tracking-wider uppercase font-medium text-right">
                BAY 04 / BAY 08
              </span>
            </div>

            {/* Row 3: CELL TEMPERATURE -> 24.8°C / ISOLATED */}
            <div
              ref={specRow3Ref}
              className="flex justify-between items-baseline gap-4 text-[11px] sm:text-xs"
            >
              <span className="text-[#94A3B8] tracking-wider uppercase font-normal">
                CELL TEMPERATURE
              </span>
              <span className="text-[#40E0D0] tracking-wider uppercase font-semibold text-right">
                24.8°C / ISOLATED
              </span>
            </div>
          </div>

          {/* Thin separator line before bottom row */}
          <div className="h-[1px] w-full bg-[#FFFFFF]/10 my-3.5" />

          {/* Bottom Row: SECURITY HASH (left) + AUTHENTICATED with turquoise indicator (right) */}
          <div
            ref={specFooterRef}
            className="flex items-center justify-between text-[10px] font-mono tracking-wider"
          >
            <span className="text-[#64748B] uppercase">
              SECURITY HASH: 0X9B...7F
            </span>
            <div className="flex items-center gap-1.5 text-[#40E0D0] font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0] inline-block shadow-[0_0_6px_#40E0D0]" />
              <span>AUTHENTICATED</span>
            </div>
          </div>
        </div>

        {/* Required Order 5 & 6: Scroll instruction & Mouse Indicator positioned close together */}
        <div
          ref={scrollIndicatorRef}
          className="relative z-20 pb-4 sm:pb-8 text-center flex flex-col items-center justify-center pointer-events-none px-4"
        >
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-[#FFFFFF]/70">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.12em] sm:tracking-[0.25em] uppercase text-[#40E0D0] max-w-xs text-center leading-tight">
              SCROLL TO EXPLORE FRANCHISE OPPORTUNITIES
            </span>
            <div className="w-6 h-9 sm:w-7 sm:h-11 rounded-full border border-[#40E0D0]/40 flex items-start justify-center p-1 sm:p-1.5 shadow-[0_0_15px_rgba(64,224,208,0.2)]">
              <div className="w-1.5 h-2 sm:h-2.5 rounded-full bg-[#40E0D0] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
