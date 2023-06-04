import { ReactElement } from "react";
import { DropdownMenuProps } from "./Dropdown.props";
import classNames from "classnames";
import { motion } from "framer-motion";

export const DropdownMenu = ({
  isOpen,
  className,
  children,
  spaceBetween,
  spacing,
  ...rest
}: DropdownMenuProps): ReactElement => {
  const menu = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      },
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      {isOpen && (
        <div {...rest}>
          <motion.div
            className={classNames(
              "dropdown-menu",
              spaceBetween && spacing
                ? `space-between-${spaceBetween}-${spacing}`
                : "",
              className
            )}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            exit="closed"
            variants={menu}
          >
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
};
