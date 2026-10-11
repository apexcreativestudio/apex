'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from 'framer-motion';

export const LandingHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ 
    x: -1000, 
    y: -1000, 
    prevX: -1000, 
    prevY: -1000, 
    vx: 0, 
    vy: 0, 
    isHovered: false 
  });

  // Dynamic Cursor-Tracking Ambient Spotlight Aura
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const spotlightOpacity = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothOpacity = useSpring(spotlightOpacity, { damping: 20, stiffness: 150 });

  // 3D Perspective Tilt on Headline based on smooth cursor coordinates
  const tiltX = useTransform(smoothY, [0, 800], [2.5, -2.5]);
  const tiltY = useTransform(smoothX, [0, 1400], [-2.5, 2.5]);

  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(243, 26, 62, 0.12), rgba(122, 35, 151, 0.08), rgba(3, 167, 174, 0.05), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (mouseRef.current.prevX > -500) {
      mouseRef.current.vx = (x - mouseRef.current.prevX) * 0.4;
      mouseRef.current.vy = (y - mouseRef.current.prevY) * 0.4;
    }
    mouseRef.current.prevX = x;
    mouseRef.current.prevY = y;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.isHovered = true;

    mouseX.set(x);
    mouseY.set(y);
    spotlightOpacity.set(1);
  };

  const handleMouseLeave = () => {
    mouseRef.current.isHovered = false;
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
    mouseRef.current.prevX = -1000;
    mouseRef.current.prevY = -1000;
    mouseRef.current.vx = 0;
    mouseRef.current.vy = 0;
    spotlightOpacity.set(0);
  };

  // 60FPS Dynamic Ambient Particle & Fluid Color Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Official APEX Signature Palette Nodes
    const colors = ['#F31A3E', '#DC175B', '#7A2397', '#1D16EF', '#FB5521', '#03A7AE'];

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 45; i++) {
      const bVx = (Math.random() - 0.5) * 0.4;
      const bVy = (Math.random() - 0.5) * 0.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 100 + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: bVx,
        vy: bVy,
        baseVx: bVx,
        baseVy: bVy,
        alpha: Math.random() * 0.14 + 0.05
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth decay cursor velocity
      mouseRef.current.vx *= 0.85;
      mouseRef.current.vy *= 0.85;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isM = mouseRef.current.isHovered;

      particles.forEach((p) => {
        // Fluid dispersion away from moving cursor
        if (isM && mx > 0 && my > 0) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy);
          const maxDist = 200;

          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 1.8;
            p.vx += (dx / dist) * force + mouseRef.current.vx * 0.03;
            p.vy += (dy / dist) * force + mouseRef.current.vy * 0.03;
          }
        }

        // Apply velocity with smooth liquid damping toward base drift
        p.vx = p.vx * 0.98 + (p.baseVx - p.vx) * 0.02;
        p.vy = p.vy * 0.98 + (p.baseVy - p.vy) * 0.02;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'transparent');

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden bg-[#FCFCFD] text-[#0B0B0F] min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center items-center"
    >
      
      {/* Precision Blueprint Micro-Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0B0B0F_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

      {/* Dynamic Cursor Spotlight Ambient Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          background: spotlightBackground,
          opacity: smoothOpacity,
        }}
      />

      {/* 60FPS Dynamic Ambient Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-90"
      />

      {/* Radiant Signature Gradient Spotlight Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#F31A3E]/22 via-[#7A2397]/20 via-[#1D16EF]/18 to-[#03A7AE]/18 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#1D16EF]/15 via-[#F31A3E]/15 to-[#FB5521]/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-[#03A7AE]/15 via-[#7A2397]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center items-center h-full">
        

        {/* Main Editorial Headline with 3D Perspective Tilt Depth */}
        <motion.div 
          style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
          className="text-center max-w-5xl mx-auto my-auto py-2 sm:py-4 transition-transform duration-100 ease-out"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-heading font-black tracking-tight leading-[0.92] uppercase select-none drop-shadow-sm"
          >
            <span className="block text-[#0B0B0F] hover:tracking-normal transition-all duration-300">
              IDEAS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0B0B0F] via-[#7A2397] to-[#1D16EF] hover:brightness-110 transition-all duration-300">
              VISUALS.
            </span>
            <span className="block apex-gradient-text drop-shadow-[0_10px_40px_rgba(243,26,62,0.4)] animate-pulse-slow">
              IMPACT.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#0B0B0F]/85 max-w-3xl mx-auto font-sans font-normal leading-relaxed text-balance"
          >
            APEX CREATIVE is a next-generation design and digital marketing agency combining strategy, visual craft, 3D direction, and digital growth under one roof.
          </motion.p>

          {/* Action CTAs — Standout High-Impact Highlight with Tactile Physics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/services"
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full apex-gradient-bg text-[#FCFCFD] font-heading font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#F31A3E]/30 hover:shadow-[#F31A3E]/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Shimmer Light Flare Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                <span className="relative z-10">
                  Explore Our Services
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0B0B0F] text-[#FCFCFD] font-heading font-bold text-xs uppercase tracking-widest hover:bg-[#7A2397] transition-all duration-300 shadow-lg shadow-[#0B0B0F]/20 border border-white/10 group"
              >
                <span>Initiate Project Brief</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
