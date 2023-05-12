import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { DetailedHTMLProps, ReactElement, cloneElement, useId, useState } from "react";
import styles from "./Menu.module.scss";

const isObject = <T extends object>(value: unknown): value is T =>
  typeof value === "object" && typeof value !== "function" && value != undefined;
const isNamed = (children: unknown): children is MenuOption =>
  isObject(children) && "trigger" in children && "options" in children;

type MenuProps = {
  children: ReactElement | MenuOption;
  className?: string;
};

type MenuOption = {
  trigger?: ReactElement<
    DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  >;
  options?: ReactElement[];
};

export function AppMenu(props: MenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let menuOptions: ReactElement[] = [];
  let menuTriggerButton: ReactElement<
    DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  > = null;

  if (isNamed(props.children)) {
    const { trigger, options } = props.children;

    menuTriggerButton = cloneElement(trigger, {
      "aria-controls": open ? "menu" : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? "true" : undefined,
      onClick: handleClick
    });

    menuOptions = options.map((opt) => {
      return (
        <MenuItem
          key={opt.key}
          onClick={handleClose}
          style={{ backgroundColor: styles["background-color"], padding: 0 }}
        >
          {opt}
        </MenuItem>
      );
    });
  }

  return (
    <div className={props.className}>
      {menuTriggerButton}
      <Menu
        id={useId()}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "button",
          style: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: styles["background-color"],
            padding: "0 1.5625rem",
            overflow: "hidden",
            borderRadius: ".3125rem"
          }
        }}
        PaperProps={{
          style: {
            borderRadius: ".625rem",
            border: styles["border"],
            backgroundColor: styles["background-color"]
          }
        }}
      >
        {menuOptions}
      </Menu>
    </div>
  );
}
