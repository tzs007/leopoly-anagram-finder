import React from "react";

type Props = React.ComponentProps<"input">;

export const Input: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <input
      type="text"
      className={`p-3 bg-gray-800 rounded-full flex-1 text-center md:text-left w-full md:w-auto ${className}`}
      {...rest}
    />
  );
};
