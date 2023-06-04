import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  FormRegisterProps,
  GeneralProps,
} from "../../../interfaces/interfaces/General.props";

type Option = { label: string; value: string };

export interface SelectProps<T>
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    GeneralProps,
    FormRegisterProps<T> {
  optionProps?: OptionProps;
  options: Option[];
}

export interface OptionProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
    >,
    GeneralProps {}
