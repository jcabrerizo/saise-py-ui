import React from "react";

export default function Button({
  value,
  type = "button",
  disabled = false,
  locked = false,
  id,
  className="button",
  onClickHandler,
}: ButtonModel) {
  return (
    <button
      id={id}
      className={className}
      disabled={disabled}
      type={type}
      onClick={onClickHandler}
    >
      {value}
    </button>
  );
}

export interface ButtonModel {
  value: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  locked?: boolean;
  id?: string;
  className?: string;
  alt?: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
