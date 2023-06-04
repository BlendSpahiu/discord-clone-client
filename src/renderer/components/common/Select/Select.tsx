import {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  FormEventHandler,
  ReactElement,
  useState,
} from "react";
import { SelectProps } from "./Select.props";
import classNames from "classnames";

export const Select = <T extends object>({
  options,
  optionProps,
  className,
  fullWidth,
  ...rest
}: SelectProps<T>): ReactElement => {
  const [selected, setSelected] = useState<string>("");

  const handleSetSelected = (event: any) => {
    setSelected;
  };

  console.log(selected);

  return (
    // <select
    //   className={classNames("select", fullWidth ? "full-width" : "", className)}
    //   onChange={(e) => {
    //     console.log(e);
    //   }}
    //   value={selected}
    //   {...rest}
    // >
    //   {options &&
    //     options.map((option) => (
    //       <option onClick={handleSetSelected} key={option.value} value={option.value} {...optionProps}>
    //         {option.label}
    //       </option>
    //     ))}
    // </select>
    <div className={classNames("select")}></div>
  );
};
