// Componente input hecho con DeepSeek

import React, { InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  borderRadius?: string;
  hoverBorderColor?: string;
  focusBorderColor?: string;
  onEnterPress?: () => void;
  onValueChange?: (value: string) => void;
  customClassName?: string;
}

const InputComponent: React.FC<InputProps> = ({
  borderRadius = '4px',
  hoverBorderColor = '#3182ce',
  focusBorderColor = '#3182ce',
  onEnterPress,
  onValueChange,
  customClassName = '',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `px-4 py-2 w-full transition-all duration-200 ease-in-out border ${
    props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
  }`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnterPress) {
      onEnterPress();
    }
    props.onKeyDown?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value);
    }
    props.onChange?.(e);
  };

  return (
    <input
      {...props}
      className={`${baseClasses} ${customClassName}`}
      style={{
        borderRadius,
        borderColor: isHovered
          ? hoverBorderColor
          : props.style?.borderColor || '#e2e8f0',
        outline: 'none',
        boxShadow: 'none',
        ...props.style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={(e) => {
        setIsHovered(true);
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsHovered(false);
        props.onBlur?.(e);
      }}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
};

export default InputComponent;