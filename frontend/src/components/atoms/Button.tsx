import React from "react";

type Props = React.ComponentProps<"button">;

export const Button: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      className={`py-3 px-6 bg-green-900 rounded-full w-full md:w-auto hover:bg-green-600 text-black cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
