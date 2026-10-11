import React from 'react';

export interface BrandIconProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export const BrandIcon: React.FC<BrandIconProps> = ({
  size = 36,
  className = '',
  animate = false
}) => {
  return (
    <div 
      className={`inline-flex items-center justify-center relative select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      title="APEX Flame Icon Mark (Official Secondary Asset)"
    >
      <img
        src="/brand/icon/apex-icon-mark.png"
        alt="APEX Flame Icon Mark"
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`object-contain block transition-transform duration-300 ${animate ? 'hover:scale-110' : ''}`}
      />
    </div>
  );
};
