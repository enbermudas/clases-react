import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  id: string;
}

export default function Button({
  id,
  children
}: ButtonProps) {
  const handleOnClick = () => {
    console.log("Hice click en el botón", id);
  }

  return <button id={id} onClick={handleOnClick}>{children}</button>
}
