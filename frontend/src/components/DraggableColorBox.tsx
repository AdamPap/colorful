interface DraggableColorBoxProps {
  color: string;
}

const DraggableColorBox = ({ color }: DraggableColorBoxProps) => {
  return <div style={{ background: color }}>{color}</div>;
};

export default DraggableColorBox;
