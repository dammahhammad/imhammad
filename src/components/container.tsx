import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto md:max-w-4xl">{children}</div>;
};