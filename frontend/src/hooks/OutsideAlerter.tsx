import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref: any, outSideElementClickAction: () => any) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) outSideElementClickAction();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, outSideElementClickAction]);
}

interface OutsideAlerterProps {
  outSideElementClickAction: () => any;
}

const OutsideAlerter: React.FC<OutsideAlerterProps> = ({ children, outSideElementClickAction }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, outSideElementClickAction);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
