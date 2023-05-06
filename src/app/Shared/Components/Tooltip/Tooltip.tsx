import styles from "./Tooltip.module.scss";

interface TooltipProps {
  children: JSX.Element[];
}

export function Tooltip(tooltipProps: TooltipProps) {
  return <div className={styles.wrapper}>{tooltipProps.children}</div>;
}
