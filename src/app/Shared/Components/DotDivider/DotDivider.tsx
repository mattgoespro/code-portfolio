interface DotDividerProps {
  size: string | number;
  color?: string;
}

export function DotDivider(props: DotDividerProps) {
  const { size } = props;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size,
        backgroundColor: props.color || '#000000',
        margin: '0px 10px'
      }}
    ></div>
  );
}
