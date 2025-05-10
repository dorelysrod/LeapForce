import React, { useState } from 'react';
import arrowLine from '../../assets/Icon/arrowLine.svg';

const Button2 = ({ disabled = false }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // Visual feedback only
    console.log('Button clicked');
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`absolute bottom-4 right-4 w-14 h-14 p-4 gap-1 rounded border-2 
        flex items-center justify-center transition-all duration-200 ease-in-out
        ${disabled
          ? 'border-[#1B24264D] cursor-not-allowed opacity-50'
          : 'border-white/30 hover:border-[#1B242680] focus:border-[#1B2426CC]'}
        ${clicked && !disabled ? 'bg-white/10 scale-95' : ''}
      `}
      aria-label="More about this action"
    >
      <img src={arrowLine} alt="" className="w-4 h-4" />
    </button>
  );
};

export default Button2;
