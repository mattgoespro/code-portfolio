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
        backgroundColor: props.color || 'black',
        margin: '0px 10px'
      }}
    ></div>
  );
}
