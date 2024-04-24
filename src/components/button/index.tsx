import React from "react";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  svg?: React.ReactNode;
  textStyles?: string;
}

const Button = ({
  className,
  textStyles,
  children,
  svg,
  ...props
}: ButtonProps) => {
  const svgWithProps =
    svg &&
    React.cloneElement(svg as React.ReactElement, {
      className: `${
        (svg as React.ReactElement).props.className
      } group-hover:text-lightGreen`,
    });
  return (
    <button className={`group ${className}`} {...props}>
      <span className={textStyles}>{children}</span>
      {svgWithProps}
    </button>
  );
};

export default Button;
