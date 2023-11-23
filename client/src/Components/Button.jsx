export default function Button({ text, type, ...rest }) {
  return (
    <div>
      <button type={type} {...rest}>
        {text}
      </button>
    </div>
  );
}
