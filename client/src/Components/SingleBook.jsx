import img from "../assets/book.png";
import classes from "../styles/SingleBook.module.css";
import LibrarianApi from "../apis/LibrarianApi";
import { Link } from "react-router-dom";
import UserApi from "../apis/UserApi";

export default function SingleBook({
  book,
  setDeleteState,
  user,
  borrowed,
  borrowedId,
}) {
  const { name, author, genre, description, _id } = book;

  async function borrowBook(e) {
    try {
      /**BORROW BOOK */
      const response = await UserApi.post(
        "/borrow-book",
        { bookId: _id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("RESPONSE FROM BORROW BOOK", response);
    } catch (error) {
      console.log("ERROR FROM BORROW BOOK", error);
    }
  }
  async function returnBook(e) {
    try {
      /**RETURN BOOK */
      const response = await UserApi.post(
        "/return-book",
        { _id: borrowedId },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("RESPONSE FROM BORROW BOOK", response);
      setDeleteState((prev) => !prev);
    } catch (error) {
      console.log("ERROR FROM BORROW BOOK", error);
    }
  }

  async function handleDelete(e) {
    console.log("USER FROM SINGLE", user.token);
    try {
      /**DELETE A BOOK*/
      const response = await LibrarianApi.post(
        "/delete-book",
        { _id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("RESPONSE FROM DELETE BUTTON API");
      setDeleteState((prev) => !prev);
    } catch (error) {
      console.log("ERROR FROM DELETE BUTTON API", error);
    }
  }
  return (
    <div className={`${classes["single-book"]}`}>
      <div className={`${classes["book-image"]}`}>
        <img src={img} alt="" />
      </div>
      <div className={`${classes["book-info"]}`}>
        <h3>{name}</h3>
        <p>
          By <em>{author}</em>
        </p>
        <br />
        <p>{genre}</p>
        <br />
        <p>{description}</p>
      </div>
      <div className={`${classes["book-button"]}`}>
        {!borrowed ? (
          <button onClick={borrowBook} className={`btn`}>
            Borrow
          </button>
        ) : (
          <button onClick={returnBook} className={`btn`}>
            Return
          </button>
        )}

        <Link
          to="/add-books"
          state={{ book, editMode: true }}
          className={`btn`}
        >
          Edit
        </Link>
        <button onClick={handleDelete} className={`btn`}>
          Delete
        </button>
      </div>
    </div>
  );
}
