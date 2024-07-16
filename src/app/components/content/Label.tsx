export const Label = ({ color, text }: { color: string, text: string}) => {
  return (
    <span style={{
        backgroundColor: `${color}`,
        borderRadius: '3px',
        width: 'max-content',
        padding: '0.1rem 0.5rem',
        fontWeight: 'bold',
      }}
    >
      {text}
    </span>
  )
}