import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import useDisable from '../../hooks/useDisable';

const Button1 = ({ text, disabled: propDisabled = false }) => {
  const { ref, disabled, handleClick, handleDoubleClick } = useDisable(propDisabled);

  return (
    <button
      type="button"
      ref={ref}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      disabled={disabled}
      aria-label={text}
      className={`
        group inline-flex items-center justify-center
        w-[145px] h-[24px] md:w-[158px]
        rounded-[26px] gap-[4px]
        px-0 py-0 text-[14px] leading-[24px] md:text-[15px] md:leading-[24px]
        font-ttcommons-normal transition-colors duration-200
        text-[#BF564D] hover:text-[#A6433A] focus:text-[#59201B] active:text-[#A6433A]
        disabled:text-[#A0A0A0] disabled:cursor-not-allowed
        bg-transparent border-none outline-none
      `}
      
      
      
    >
      <span>{text}</span>
      <ArrowIcon className="w-4 h-4 text-inherit transition-colors duration-200" />
    </button>
  );
};

export default Button1;
