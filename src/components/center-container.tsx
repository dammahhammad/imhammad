import { ReactNode } from "react";

export default function CenterContainer({ children }: { children: ReactNode }) {
  return (
    <div className="">
      {children}
    </div>
  );
}
