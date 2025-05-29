// Este componente es hecho con Claude <IA>


import React, { useState, useEffect, useRef } from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onEnter?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void | Promise<void>;
  searchDelay?: number;
  minSearchLength?: number;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

const CustomInput: React.FC<InputProps> = ({
  placeholder = "Escribe aquí...",
  value,
  defaultValue,
  onChange,
  onKeyDown,
  onEnter,
  onFocus,
  onBlur,
  onSearch,
  searchDelay = 1500,
  minSearchLength = 2,
  type = "text",
  disabled = false,
  className = "",
  id,
  name,
  required = false,
  maxLength,
  minLength
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determinar si usar valor controlado o no controlado
  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;

  // Limpiar timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  // Función de búsqueda con debounce
  const executeSearch = async (searchValue: string) => {
    if (!onSearch || searchValue.length < minSearchLength) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      await onSearch(searchValue);
    } catch (error) {
      console.error('Error en búsqueda:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue, e);

    // Configurar debounce para búsqueda
    if (onSearch) {
      // Limpiar timeout anterior
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      // Si el valor está vacío, no buscar
      if (newValue.trim() === '') {
        setIsSearching(false);
        return;
      }

      // Si es menor que la longitud mínima, no buscar pero mostrar que se está preparando
      if (newValue.length < minSearchLength) {
        setIsSearching(false);
        return;
      }

      // Configurar nuevo timeout
      searchTimeoutRef.current = setTimeout(() => {
        executeSearch(newValue);
      }, searchDelay);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e);
    
    if (e.key === 'Enter') {
      onEnter?.(inputValue, e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: onSearch ? '12px 40px 12px 16px' : '12px 16px',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#1f2937',
    backgroundColor: disabled ? '#f9fafb' : '#ffffff',
    border: `2px solid ${isFocused ? '#3b82f6' : '#d1d5db'}`,
    borderRadius: '6px',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    boxShadow: isFocused ? '0 10px 25px -5px rgba(59, 130, 246, 0.2)' : 'none',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.6 : 1,
    marginBottom: '5px',
    marginTop: '5px',
  };

  const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    padding: '0px 5px'
  };

  const spinnerStyles: React.CSSProperties = {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '16px',
    height: '16px',
    border: '2px solid #3b82f6',
    borderTop: '2px solid transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: translateY(-50%) rotate(0deg); }
            100% { transform: translateY(-50%) rotate(360deg); }
          }
          
          .custom-input:hover {
            border-color:rgb(18, 78, 182) !important;
          }
          
          .custom-input:focus {
            border-color: #3b82f6 !important;
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2) !important;
          }
          
          .custom-input:disabled:hover {
            border-color: #d1d5db !important;
          }
          
          .custom-input::placeholder {
            color: #6b7280;
            opacity: 1;
          }
          
          /* Responsive styles */
          @media (max-width: 640px) {
            .custom-input {
              padding: 10px 14px !important;
              font-size: 14px !important;
            }
            .custom-input.with-search {
              padding-right: 36px !important;
            }
          }
          
          @media (min-width: 768px) {
            .custom-input {
              padding: 12px 16px !important;
              font-size: 16px !important;
            }
            .custom-input.with-search {
              padding-right: 40px !important;
            }
          }
        `}
      </style>
      
      <div style={containerStyles}>
        <input
          type={type}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`custom-input ${onSearch ? 'with-search' : ''} ${className}`}
          style={inputStyles}
          id={id}
          name={name}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
        />
        
        {/* Indicador de búsqueda */}
        {onSearch && isSearching && (
          <div style={spinnerStyles}></div>
        )}
      </div>
    </>
  );
};

export default CustomInput;