import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { createElement, useId, useState } from "react";
import styles from "./Menu.module.scss";

interface MenuProps {
  children: JSX.Element[];
  className?: string;
}

export default function AppMenu(props: MenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const trigger = props.children.find((c) => c.props.trigger);
  const triggerButton = createElement("button", {
    ...trigger.props,
    "aria-controls": open ? "menu" : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? "true" : undefined,
    onClick: handleClick
  });

  return (
    <div className={props.className}>
      {triggerButton}
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
            padding: "0 25px",
            overflow: "hidden",
            borderRadius: "5px"
          }
        }}
        PaperProps={{
          style: {
            borderRadius: "10px",
            border: styles["border"],
            backgroundColor: styles["background-color"]
          }
        }}
      >
        {props.children
          .filter((c) => c.props.option)
          .map((opt) => {
            return (
              <MenuItem
                key={opt.props.option}
                onClick={handleClose}
                style={{ backgroundColor: styles["background-color"], padding: 0 }}
              >
                {opt}
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
}
