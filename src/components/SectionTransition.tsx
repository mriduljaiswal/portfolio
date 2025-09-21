import React, { useEffect, useRef, useState } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  sectionId: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [transitionState, setTransitionState] = useState<'none' | 'entering' | 'leaving'>('none');
  const [blurOpacity, setBlurOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(sectionHeight, windowHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibilityRatio = visibleHeight / sectionHeight;

      // Transition zones (when section is partially visible) - Much tighter zones
      if (visibilityRatio > 0.95) {
        // Section is almost fully visible - no blur
        setTransitionState('none');
        setBlurOpacity(0);
      } else if (visibilityRatio > 0.75) {
        // Section is mostly visible - light transition
        if (rect.top < 0) {
          // Section is leaving (scrolling down)
          setTransitionState('leaving');
        } else {
          // Section is entering (scrolling up or down into view)
          setTransitionState('entering');
        }
        
        // Much sharper blur intensity curve
        const blurIntensity = (0.95 - visibilityRatio) / 0.2; // 0.95-0.75 = 0.2 range
        setBlurOpacity(Math.min(0.6, blurIntensity * 0.8));
      } else {
        // Section is mostly hidden - no blur when completely out
        setTransitionState('none');
        setBlurOpacity(0);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {children}
      
      {/* Transition blur overlay - Reduced intensity */}
      {transitionState !== 'none' && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-100"
          style={{
            opacity: blurOpacity,
            backdropFilter: `blur(${blurOpacity * 6}px)`, // Reduced from 12px to 6px
            WebkitBackdropFilter: `blur(${blurOpacity * 6}px)`,
            background: `linear-gradient(
              ${transitionState === 'leaving' ? 'to top' : 'to bottom'}, 
              rgba(15, 15, 15, ${blurOpacity * 0.2}), // Reduced opacity
              rgba(15, 15, 15, ${blurOpacity * 0.05})
            )`,
            zIndex: 5
          }}
        />
      )}
    </div>
  );
};

export default SectionTransition;