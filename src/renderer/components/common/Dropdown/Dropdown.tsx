import { FC, ReactElement, Ref, RefObject, forwardRef, useRef } from "react";
import { DropdownCopmosition, DropdownProps } from "./Dropdown.props";
import { DropdownItem } from "./DropdownItem";
import { DropdownTrigger } from "./DropdownTrigger";
import { DropdownMenu } from "./DropdownMenu";
import { useOnClickOutside } from "../../../hooks/useOutsideClick/useOutsideClick";
import classNames from "classnames";
import { motion } from "framer-motion";

// export const Dropdown: FC<DropdownProps> & DropdownCopmosition = ({
//   children,
//   onClose,
//   className,
//   fullWidth,
//   ...rest
// }): ReactElement => {
//   const ref = useRef<HTMLDivElement>(null);
//   useOnClickOutside(ref, onClose);

//   return (
//     <div
//       ref={ref}
//       className={classNames(
//         "dropdown",
//         fullWidth ? "full-width" : "",
//         className
//       )}
//       {...rest}
//     >
//       {children}
//     </div>
//   );
// };

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ onClose, fullWidth, className, children, ...rest }, ref): ReactElement => {
    useOnClickOutside(ref, onClose);

    return (
      <div
        ref={ref}
        className={classNames(
          "dropdown",
          fullWidth ? "full-width" : "",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
