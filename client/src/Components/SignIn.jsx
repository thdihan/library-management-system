import classes from "../styles/SignIn.module.css";
import Button from "./Button";
import TextInput from "./TextInput";
export default function SignIn() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    console.log("Form Data Example : ", formDataObject);
  }
  return (
    <div className={`${classes["signin-component"]}`}>
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
        <Button type={`submit`} text={`Signin`} />
      </form>
    </div>
  );
}
