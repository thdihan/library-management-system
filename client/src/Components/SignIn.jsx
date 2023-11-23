import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import classes from "../styles/SignIn.module.css";
import Button from "./Button";
import TextInput from "./TextInput";
export default function SignIn() {
  const { login, user } = useAuthContext();
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    console.log("Form Data Example : ", formDataObject);
    try {
      const res = await login(formDataObject.username, formDataObject.password);
      console.log(res);
    } catch (err) {
      console.log("LOGIN FUNCTION ERROR", err);
    }
  }
  return (
    <div className={`${classes["signin-component"]}`}>
      <form onSubmit={handleLogin}>
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
