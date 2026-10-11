import React from 'react';

export interface BrandGradientDividerProps {
  height?: string;
  className?: string;
  animated?: boolean;
}

export const BrandGradientDivider: React.FC<BrandGradientDividerProps> = ({
  height = 'h-[2px]',
  className = '',
  animated = false
}) => {
  return (
    <div className={`w-full ${height} ${className} relative overflow-hidden`}>
      <div 
        className={`w-full h-full ${animated ? 'apex-animated-gradient' : 'bg-gradient-to-r from-[#F31A3E] via-[#DC175B] via-[#7A2397] to-[#1D16EF]'}`} 
      />
    </div>
  );
};
