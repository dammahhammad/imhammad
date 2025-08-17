import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto md:max-w-4xl sm:backdrop-blur-xl transition-colors duration-300 w-full px-4">{children}</div>;
};