const ArrowIcon = ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1L12 7L6 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="4.62023"
      />
      <path
        d="M0 7L12 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="4.62023"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export default ArrowIcon;
  