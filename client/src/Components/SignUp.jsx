import Button from "./Button";
import TextInput from "./TextInput";
import classes from "../styles/SignUp.module.css";
import Dropdown from "./Dropdown";

export default function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    console.log("Form Data Example : ", formDataObject);
  }
  return (
    <div className={`${classes["signup-component"]}`}>
      <form onSubmit={handleSubmit}>
        <TextInput
          id={`username`}
          name={`username`}
          text={`Username`}
          type={`text`}
        />
        <TextInput
          id={`password`}
          name={`password`}
          text={`Password`}
          type={`password`}
        />
        <TextInput
          id={`confirm-password`}
          name={`confirm-password`}
          text={`Confirm Password`}
          type={`password`}
        />
        <Dropdown
          text={`User Type`}
          name={`user-type`}
          id={`user-type`}
          options={["teacher", "student"]}
        />
        <Button type={`submit`} text={`Signin`} />
      </form>
    </div>
  );
}
