import TextInput from "./TextInput";
import classes from "../styles/AddBooks.module.css";
import Button from "./Button";
import LibrarianApi from "../apis/LibrarianApi";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function AddBooks() {
    const { user } = useAuthContext();

    const location = useLocation();
    const { editMode } = location.state || false;
    console.log(editMode);
    const { book } = location.state || false;

    async function addBook(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData);
        console.log("Form Data Example : ", formDataObject);
        console.log("USER TOKEN,", user.token);
        try {
            const response = await LibrarianApi.post(
                "/add-book",
                formDataObject,
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("RESPONSE FROM ADD BOOK API", response);
        } catch (error) {
            console.log("ERROR FROM ADD BOOK API", error);
        }
    }
    async function updateBook(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData);
        formDataObject["_id"] = book?._id;
        console.log("Form Data Example : ", formDataObject);

        try {
            /**UPDATE BOOK */
            const response = await LibrarianApi.put(
                "/update-book",
                formDataObject,
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("RESPONSE FROM UPDATE BOOK", response);
        } catch (error) {
            console.log("ERROR  FROM UPDATE BOOK", error);
        }
    }
    const [input, setInput] = useState(book?.description);
    return (
        <div className={`body-area`}>
            <form
                className={`${classes["add-book-form"]}`}
                onSubmit={editMode ? updateBook : addBook}
            >
                <TextInput
                    id={`bookname`}
                    name={`name`}
                    text={`Book Name`}
                    type={`text`}
                    value={editMode ? book.name : ""}
                />
                <TextInput
                    id={`author`}
                    name={`author`}
                    text={`Author Name`}
                    type={`text`}
                    value={editMode ? book.author : ""}
                />
                <TextInput
                    id={`genre`}
                    name={`genre`}
                    text={`Genre`}
                    type={`text`}
                    value={editMode ? book.genre : ""}
                />
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></textarea>
                <Button
                    type={`submit`}
                    text={editMode ? "Update Book" : `Add Book`}
                />
            </form>
        </div>
    );
}
