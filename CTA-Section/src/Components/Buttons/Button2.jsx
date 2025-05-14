import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import useDisable from '../../hooks/useDisable';

const Button2 = () => {
  const { ref, disabled, handleClick, handleDoubleClick } = useDisable(false);

  return (
    <button
      type="button"
      ref={ref}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      disabled={disabled}
      aria-label="More about this action"
      className={`
        w-12 h-12           
        lg:w-14 lg:h-14     
        p-3 lg:p-4
        flex items-center justify-center gap-1
        rounded-[4px] border-2
        border-white/30 text-white
        transition-all duration-200 ease-in-out
        hover:border-[#1B242680] focus:border-[#1B2426CC]
        disabled:border-[#1B2426] disabled:border-opacity-30
        disabled:text-[#1B2426] disabled:text-opacity-30
        disabled:cursor-not-allowed disabled:opacity-50
      `}
    >
      <ArrowIcon />
    </button>
  );
};

export default Button2;
