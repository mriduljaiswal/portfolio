import './GradientText.css';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  fontWeight?: number | string;
}

export default function GradientText({
  children,
  className = '',
  colors,
  animationSpeed = 15, // Consistent slow animation speed
  showBorder = false,
  fontWeight = 'inherit'
}: GradientTextProps) {
  // Dark mode color scheme
  const finalColors = colors || ['#964ddbff', '#560ad1ff', '#964ddbff', '#560ad1ff', '#964ddbff'];

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${finalColors.join(', ')})`,
    animationDuration: `${animationSpeed}s`, // Faster animation
    fontWeight: fontWeight,
    willChange: 'background-position' // Optimize for animations
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
