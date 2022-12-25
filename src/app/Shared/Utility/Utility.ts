import { CSSProperties } from 'react';

interface StylesheetVariable {
  name: string;
  value: string;
}

export function setStylesheetVariables(...variables: StylesheetVariable[]): CSSProperties {
  const style = {};

  for (const variable of variables) {
    style[`--${variable.name}`] = variable.value;
  }

  return style;
}
