import { CSSProperties } from 'react';

export function setStyleVariableColor(variable: string, color: string): CSSProperties {
  const style = {};
  style[`--${variable}`] = color;
  return style;
}
