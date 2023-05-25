import React from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "./constants.js";

const PC = ({ children }) => {
  const isPC = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.pc}px)`,
  });
  return <>{isPC && children}</>;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.tablet}px) and (max-width: ${
      BREAK_POINT.pc - 1
    }px)`,
  });
  return <>{isTablet && children}</>;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT.tablet - 1}px)`,
  });
  return <>{isMobile && children}</>;
};

const TabletPC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.tablet}px)`,
  });
  return <>{isMobile && children}</>;
};

export { Mobile, Tablet, PC, TabletPC };
