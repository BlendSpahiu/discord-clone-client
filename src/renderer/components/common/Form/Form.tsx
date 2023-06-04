import { ReactElement } from "react";
import { FormProps } from "./Form.props";
import classNames from "classnames";

export const Form = ({
  onSubmit,
  children,
  className,
  ...rest
}: FormProps): ReactElement => {
  return (
    <form
      className={classNames("form", className)}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </form>
  );
};
