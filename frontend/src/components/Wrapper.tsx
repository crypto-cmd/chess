import { ReactNode } from "react";

// A div wrapper
type Props = {
  children?: ReactNode;
  className?: string;
}
export const Wrapper = ({children, className}:Props) => {
  return (
    <div className={className}>{children}</div>
  );
}