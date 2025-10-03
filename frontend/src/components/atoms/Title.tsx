import React from "react";

type Props = React.ComponentProps<"h1">;

export const Title: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <h1 className={`text-2xl text-center ${className}`} {...rest}>
      {children}
    </h1>
  );
};
