import { useState, useRef } from 'react';

const useTemporaryDisable = (initialDisabled = false, timeout = 2000) => {
  const [disabled, setDisabled] = useState(initialDisabled);
  const ref = useRef(null);

  const handleClick = () => {
    if (disabled) return;
    ref.current?.focus();
  };

  const handleDoubleClick = () => {
    if (disabled) return;
    setDisabled(true);
    ref.current?.blur();
    setTimeout(() => setDisabled(false), timeout);
  };

  return {
    ref,
    disabled,
    handleClick,
    handleDoubleClick,
  };
};

export default useTemporaryDisable;
