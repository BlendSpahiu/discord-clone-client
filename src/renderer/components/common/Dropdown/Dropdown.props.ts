import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { GeneralProps } from "../../../interfaces/interfaces/General.props";
import { ButtonProps } from "../Button/Button.props";

export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    GeneralProps {
  isOpen?: boolean;
  onClose: () => void;
}

export interface DropdownItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    GeneralProps {
  val?: string;
  onItemClick: () => void;
  buttonProps?: ButtonProps;
}

export interface DropdownTriggerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    GeneralProps {
  val?: string;
  icon?: ReactNode;
  onShow: () => void;
}

export interface DropdownCopmosition {
  Item?: FC<DropdownItemProps>;
  Trigger?: FC<DropdownTriggerProps>;
  Menu?: FC<DropdownMenuProps>;
}

export interface DropdownMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    GeneralProps {
  isOpen: boolean;
}
