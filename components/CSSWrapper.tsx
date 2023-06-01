import React, { ReactNode } from "react";

const CSSWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="bg-sky-950 py-10">{children}</div>;
};

export default CSSWrapper;
