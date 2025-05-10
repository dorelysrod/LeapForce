import React, { useState } from 'react';
import arrowIcon from '../../assets/Icon/arrow.svg';

const Button1 = ({ text, disabled: propDisabled }) => {
  const [disabled, setDisabled] = useState(propDisabled);

  const handleClick = () => {
    if (disabled) return;
    setDisabled(true);
    setTimeout(() => setDisabled(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      aria-label={text}
      className={`
        group relative flex items-center gap-2 px-6 py-3 transition-all
        font-ttcommons-normal text-base sm:text-[19px]
        bg-transparent border-none outline-none
        text-[#BF564D] hover:text-[#A6433A] focus:text-[#59201B] active:text-[#A6433A]
        disabled:text-[#A0A0A0] disabled:cursor-not-allowed
      `}
    >
      <span>{text}</span>
      <img
        src={arrowIcon}
        alt="arrow icon"
        className={`
          w-4 h-4 transition-colors
          group-disabled:filter group-disabled:brightness-[0] group-disabled:invert-[0.62]
          group-enabled:filter group-enabled:brightness-[0] group-enabled:invert-[0.38] group-enabled:hue-rotate-[330deg]
        `}
      />
    </button>
  );
};

export default Button1;
