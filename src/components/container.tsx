import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto md:max-w-4xl backdrop-blur-xl w-full px-4">{children}</div>;
};