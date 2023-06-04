import { ReactElement } from "react";
import { DropdownTriggerProps } from "./Dropdown.props";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const DropdownTrigger = ({
  className,
  icon,
  fullWidth,
  children,
  onShow,
  ...rest
}: DropdownTriggerProps): ReactElement => {
  return (
    <div
      className={classNames(
        "dropdown-trigger",
        fullWidth ? "full-width" : "",
        className
      )}
      onClick={onShow}
      {...rest}
    >
      {children}
      {icon || <ChevronDownIcon className="dropdown-trigger-icon" />}
    </div>
  );
};
