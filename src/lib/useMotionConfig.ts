import { useEffect, useState } from 'react';

export function useMotionConfig() {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsLowEndDevice(false);
      return;
    }

    const ua = navigator.userAgent || navigator.vendor || window.opera;
    setUserAgent(ua);
    
    // Detect mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    
    // More sophisticated low-end detection
    const isLowEnd = 
      isMobile && (
        // Check for older Android versions
        /Android [1-5]\.(?:[0-9]+)/.test(ua) ||
        // Check for older iOS versions  
        /iPhone OS [1-9]_[0-9_]+ like Mac OS X/.test(ua) ||
        // Check for known low-end devices
        /(Moto G[1-5]|Nexus 4|Nexus 5|Samsung Galaxy [JS]3)/.test(ua) ||
        // Memory/CPU heuristics
        (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
      );

    setIsLowEndDevice(isLowEnd);
  }, []);

  return {
    isLowEndDevice,
    // Animation configs optimized for device capability
    animationConfig: isLowEndDevice ? {
      duration: 0.25,
      type: "tween" as const,
      ease: "easeInOut" as const,
    } : {
      duration: 0.4,
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
    // Feature flags for what to animate
    shouldAnimate: !isLowEndDevice,
    shouldAnimateLoop: !isMobile && !isLowEndDevice, // Kill loops on all mobile/low-end
    shouldShowSpline: !isMobile && !isLowEndDevice, // Kill Spline on all mobile/low-end
    shouldHoverAnimate: !isMobile && !isLowEndDevice && !/iPad|iPhone|iPod/.test(userAgent),
    shouldAnimateOnScroll: !isLowEndDevice,
    // Reduced motion preference from OS
    prefersReducedMotion: typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  };
}