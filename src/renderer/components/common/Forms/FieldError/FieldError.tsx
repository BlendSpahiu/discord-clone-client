import { ReactElement } from "react";
import { Typography } from "../../Typography/Typography";
import { FieldErrorProps } from "./FieldError.props";

export const FieldError = ({ error }: FieldErrorProps): ReactElement => {
  return (
    <Typography className="field-error" as="p">
      {error.message}
    </Typography>
  );
};
