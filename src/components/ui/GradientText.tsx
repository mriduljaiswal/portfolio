import './GradientText.css';
import { useTheme } from '../../contexts/ThemeContext';

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
  animationSpeed = 8,
  showBorder = false,
  fontWeight = 'inherit'
}: GradientTextProps) {
  const { theme } = useTheme();
  
  // Theme-aware color schemes
  const finalColors = colors || (theme === 'dark' 
    ? ['#964ddbff', '#560ad1ff', '#964ddbff', '#560ad1ff', '#964ddbff'] // Purple for dark mode
    : ['#f97316ff', '#ea580cff', '#f97316ff', '#ea580cff', '#f97316ff']  // Orange for light mode
  );

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${finalColors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
    fontWeight: fontWeight
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