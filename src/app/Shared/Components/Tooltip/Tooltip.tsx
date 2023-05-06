import styles from "./Tooltip.module.scss";

interface TooltipProps {
  textHint: string;
  children: JSX.Element;
}

export function Tooltip(props: TooltipProps) {
  return (
    <div
      className={styles.wrapper}
      {...{
        "tooltip-text-hint": `${props.textHint}`
      }}
    >
      {props.children}
    </div>
  );
}
