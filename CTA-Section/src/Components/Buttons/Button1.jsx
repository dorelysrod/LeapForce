import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import useDisable from "../../hooks/useDisable";

const Button1 = ({ text, disabled: propDisabled = false }) => {
  const { ref, disabled, handleClick, handleDoubleClick } =
    useDisable(propDisabled);

  return (
    <button
      type="button"
      ref={ref}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      disabled={disabled}
      aria-label={text}
      className={`
        inline-flex items-center gap-[4px] align-baseline
        p-0 m-0
        bg-transparent border-none outline-none
        font-ttcommons-normal
        text-[#BF564D]
        hover:text-[#A6433A]
        focus:text-[#59201B]
        active:text-[#A6433A]
        disabled:text-[#A0A0A0] disabled:cursor-not-allowed
        transition-colors duration-200
      `}
    >
      <span
        className={`
          font-ttcommons-regular
          text-[21px] leading-[24px] tracking-[0]
          md:text-[23px] md:leading-[32px] md:tracking-[0]
        `}
      >
        {text}
      </span>
      <ArrowIcon className="w-4 h-4 text-inherit transition-colors duration-200" />
    </button>
  );
};

export default Button1;
