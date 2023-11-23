import TextInput from "./TextInput";
import classes from "../styles/AddBooks.module.css";
import Button from "./Button";
export default function AddBooks() {
  return (
    <div className={`body-area`}>
      <form className={`${classes["add-book-form"]}`}>
        <TextInput
          id={`bookname`}
          name={`name`}
          text={`Book Name`}
          type={`text`}
        />
        <TextInput
          id={`author`}
          name={`author`}
          text={`Author Name`}
          type={`text`}
        />
        <TextInput id={`genre`} name={`genre`} text={`Genre`} type={`text`} />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <Button type={`submit`} text={`Add Book`} />
      </form>
    </div>
  );
}
