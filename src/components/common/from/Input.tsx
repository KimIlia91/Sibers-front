import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  reg: any;
};

const Input = ({ type, placeholder, reg }: InputProps) => {
  return (
    <input
      {...reg}
      type={type}
      placeholder={placeholder}
      className="text-black rounded-md border-2 py-2 px-6 border-black w-[348px] font-medium leading-none"
    />
  );
};

export default Input;
