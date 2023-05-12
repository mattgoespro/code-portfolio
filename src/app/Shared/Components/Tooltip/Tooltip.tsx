import { CSSProperties } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  textHint: string;
  style?: CSSProperties;
  children: JSX.Element;
}

export function Tooltip(props: TooltipProps) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className={styles.wrapper} tooltip-text-hint={props.textHint} style={props.style}>
      {props.children}
    </div>
  );
}
