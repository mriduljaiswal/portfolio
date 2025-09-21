import React, { useEffect, useRef, useState } from 'react';

interface SectionBlurProps {
  children: React.ReactNode;
  className?: string;
}

const SectionBlur: React.FC<SectionBlurProps> = ({ children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showBottomBlur, setShowBottomBlur] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show blur when the section is partially visible at the bottom
          // This happens when the next section is starting to come into view
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          
          // Show blur when bottom of section is near bottom of viewport
          const showBlur = rect.bottom < windowHeight && rect.bottom > windowHeight * 0.7;
          setShowBottomBlur(showBlur);
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Also listen to scroll for more precise control
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Show blur when bottom 30% of section is visible and next section is coming
      const showBlur = rect.bottom < windowHeight && rect.bottom > windowHeight * 0.6;
      setShowBottomBlur(showBlur);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {children}
      
      {/* Bottom edge blur overlay */}
      {showBottomBlur && (
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none transition-opacity duration-300"
          style={{
            height: '120px',
            background: 'linear-gradient(to top, rgba(15, 15, 15, 0.9), transparent)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 10
          }}
        />
      )}
    </div>
  );
};

export default SectionBlur;