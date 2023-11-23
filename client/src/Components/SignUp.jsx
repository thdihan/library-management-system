import Button from "./Button";
import TextInput from "./TextInput";
import classes from "../styles/SignUp.module.css";
import Dropdown from "./Dropdown";
import { useSignup } from "../Hooks/useSignup";
import { Link } from "react-router-dom";

export default function SignUp() {
  const { signup } = useSignup();
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    console.log("Form Data Example : ", formDataObject);
    try {
      await signup(formDataObject);
    } catch (err) {
      console.log("SIGNUP ERROR", err);
    }
  }
  return (
    <div className={`${classes["signup-component"]}`}>
      <form onSubmit={handleSubmit}>
        <TextInput
          id={`username`}
          name={`username`}
          text={`Email`}
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
          name={`type`}
          id={`user-type`}
          options={["teacher", "student", "librarian"]}
        />
        <Button type={`submit`} text={`Signup`} />
        <p>
          Have an account? <Link to="/signin">Signin</Link>
        </p>
      </form>
    </div>
  );
}
