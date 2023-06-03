import React, { ReactNode } from "react";

const CSSWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-sky-950 py-10 min-h-screen text-white">{children}</div>
  );
};

export default CSSWrapper;
