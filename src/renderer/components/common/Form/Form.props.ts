import { DetailedHTMLProps, FormEventHandler, HTMLAttributes } from "react";

export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
