import classes from "../styles/BookList.module.css";
import SingleBook from "./SingleBook";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import { useAllBooks } from "../Hooks/useAllBooks";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useBorrowedBooks } from "../Hooks/useBorrowedBooks";
export default function BookList() {
  const { user } = useAuthContext();
  const { books, loading, error, setDeleteState } = useAllBooks(user);
  const { borrowedBooks } = useBorrowedBooks(user);
  console.log("BORROWED BOOKS", borrowedBooks);
  const genre = ["horror", "fiction", "romantic"];
  return (
    <div className={`${classes["book-list-component"]}`}>
      <div className={`${classes["search-bar"]}`}>
        <TextInput
          id={`search-bar`}
          name={`Search Bar`}
          type={`text`}
          placeholder={`Search By Name`}
        />
      </div>
      <div className={`${classes["filter-bar"]}`}>
        <Dropdown
          name={`genre-filter`}
          id={`genre-filter`}
          options={genre}
          placeholder={`Filter By Genre`}
        />
        <Dropdown
          name={`genre-filter`}
          id={`genre-filter`}
          options={genre}
          placeholder={`Filter By Author`}
        />
      </div>
      <div className={`${classes["book-list"]}`}>
        {!loading &&
          books?.map((book, index) => (
            <SingleBook
              key={index}
              book={book}
              setDeleteState={setDeleteState}
              user={user}
            />
          ))}
      </div>
    </div>
  );
}
