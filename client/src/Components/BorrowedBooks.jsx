import classes from "../styles/BookList.module.css";
import SingleBook from "./SingleBook";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useBorrowedBooks } from "../Hooks/useBorrowedBooks";
export default function BorrowedBooks() {
  const { user } = useAuthContext();
  const { borrowedBooks, loading, error, setDeleteState } =
    useBorrowedBooks(user);
  console.log("BORROWED BOOKS", borrowedBooks);
  const genre = ["horror", "fiction", "romantic"];
  return (
    <div className={`body-area`}>
      {" "}
      <div className={`${classes["book-list-component"]}`}>
        <h1>Borrowed Books</h1>
        <div className={`${classes["book-list"]}`}>
          {!loading &&
            borrowedBooks?.map((book, index) => {
              return (
                !book?.return_status && (
                  <SingleBook
                    key={index}
                    book={book.bookId}
                    borrowedId={book._id}
                    user={user}
                    borrowed={true}
                    setDeleteState={setDeleteState}
                  />
                )
              );
            })}
        </div>
      </div>
    </div>
  );
}
