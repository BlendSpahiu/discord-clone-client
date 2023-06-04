import { ReactElement } from "react";
import { ButtonProps } from "./Button.props";
import classNames from "classnames";
import { motion } from "framer-motion";

export const Button = ({
  type = "button",
  children,
  className,
  variant,
  color,
  fullWidth = true,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <motion.button
      transition={{ duration: 0.1 }}
      whileTap={{ scale: 0.97, backgroundColor: "#3c47c5" }}
      className={classNames(
        "button",
        fullWidth ? "full-width" : "",
        variant ? `button-${variant}` : "",
        color ? `button-text-${color}` : "",
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
