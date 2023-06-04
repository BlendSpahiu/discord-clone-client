import { ReactElement } from "react";
import { LabelProps } from "./Label.props";
import classNames from "classnames";

export const Label = ({
  id,
  htmlFor,
  children,
  className,
  ...rest
}: LabelProps): ReactElement => {
  return (
    <label
      className={classNames("label", className)}
      id={id}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </label>
  );
};
