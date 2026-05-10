export default function NeumorphicButton({ children, ...props }: any) {
  return (
    <button {...props} className="neu-button">
      {children}
    </button>
  );
}