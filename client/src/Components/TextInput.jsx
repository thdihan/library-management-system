export default function TextInput({ id, text, name, type, ...rest }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type={type} name={name} id={id} {...rest} />
    </div>
  );
}
