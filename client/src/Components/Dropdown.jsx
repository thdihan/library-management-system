import _ from "lodash";
export default function Dropdown({
  name,
  id,
  options,
  text,
  placeholder,
  filterFunction,
}) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <select
        name={name}
        id={id}
        onChange={filterFunction ? filterFunction : ""}
      >
        <option value="">{placeholder}</option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {_.capitalize(option)}
          </option>
        ))}
      </select>
    </div>
  );
}
