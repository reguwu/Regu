export const Label = ({
  color,
  text,
  margin,
}: {
  color: string;
  text: string;
  margin?: [number, number, number, number];
}) => {
  return (
    <span
      style={{
        backgroundColor: `${color}`,
        borderRadius: "3px",
        width: "max-content",
        padding: "0.1rem 0.5rem",
        fontWeight: "bold",
        margin: margin ? `${margin[0]}rem ${margin[1]}rem ${margin[2]}rem ${margin[3]}rem` : "0",
      }}
    >
      {text}
    </span>
  );
};
