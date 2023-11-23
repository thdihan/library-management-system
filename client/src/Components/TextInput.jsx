import { useState } from "react";

export default function TextInput({ id, text, name, type, value, ...rest }) {
  const [input, setInput] = useState(value);
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        {...rest}
      />
    </div>
  );
}
