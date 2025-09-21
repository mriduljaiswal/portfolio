import React, { useEffect, useRef, useState } from 'react';

interface ScrollBlurProps {
  children: React.ReactNode;
  className?: string;
  blurStrength?: number;
  threshold?: number;
}

const ScrollBlur: React.FC<ScrollBlurProps> = ({ 
  children, 
  className = '', 
  blurStrength = 8 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate blur based on how much of the section is visible
            const ratio = entry.intersectionRatio;
            // Blur more when less of the section is visible (transitioning in/out)
            const blur = blurStrength * (1 - ratio);
            setBlurAmount(blur);
          } else {
            // Not visible, apply maximum blur
            setBlurAmount(blurStrength);
          }
        });
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05), // 0, 0.05, 0.1, ... 1.0
        rootMargin: '-10% 0px -10% 0px' // Start transition when 10% into viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [blurStrength]);

  return (
    <div 
      ref={sectionRef}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        filter: `blur(${blurAmount}px)`,
        transform: `scale(${1 + blurAmount * 0.01})`, // Slight scale effect
        opacity: Math.max(0.3, 1 - blurAmount * 0.1) // Fade effect
      }}
    >
      {children}
    </div>
  );
};

export default ScrollBlur;