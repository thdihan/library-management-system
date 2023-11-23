import classes from "../styles/BookList.module.css";
import SingleBook from "./SingleBook";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import { useAllBooks } from "../Hooks/useAllBooks";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useBorrowedBooks } from "../Hooks/useBorrowedBooks";
import { useEffect, useState } from "react";
export default function BookList() {
  const { user } = useAuthContext();
  const { books, loading, error, setDeleteState } = useAllBooks(user);
  const { borrowedBooks } = useBorrowedBooks(user);
  console.log("BORROWED BOOKS", borrowedBooks);

  // const genre = ["horror", "fiction", "romantic"];
  const [filterGenre, setFilterGenre] = useState(false);
  const [filterAuthor, setFilterAuthor] = useState(false);
  const [filterBook, setFilterBook] = useState([]);
  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const tempData = [...genre];
    books.forEach((book) => {
      if (!tempData.includes(book.genre)) tempData.push(book.genre);
    });
    setGenre(tempData);
  }, [books]);

  const [author, setAuthor] = useState([]);
  useEffect(() => {
    const tempData = [...author];
    books.forEach((book) => {
      if (!tempData.includes(book.author)) tempData.push(book.author);
    });
    setAuthor(tempData);
  }, [books]);

  useEffect(() => {
    if (filterGenre) {
      const sortedData = books.filter((book) => book.genre == filterGenre);
      console.log("SORTED DATA", sortedData);
      setFilterBook([...sortedData]);
    } else {
      setFilterBook([...books]);
    }
  }, [filterGenre, books]);
  useEffect(() => {
    if (filterAuthor) {
      const sortedData = books.filter((book) => book.author == filterAuthor);
      console.log("SORTED DATA", sortedData);
      setFilterBook([...sortedData]);
    } else {
      setFilterBook([...books]);
    }
  }, [filterAuthor, books]);

  useEffect(() => {
    console.log("Get Task By Priority :");
    if (search) {
      const newData = books.filter((book) => book.name?.includes(search));
      console.log("New DATA", newData);
      setFilterBook([...newData]);
    } else {
      setFilterBook([...books]);
    }
  }, [search]);

  return (
    <div className={`${classes["book-list-component"]}`}>
      <div className={`${classes["search-bar"]}`}>
        <input
          id={`search-bar`}
          name={`Search Bar`}
          type={`text`}
          placeholder={`Search By Name`}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={`${classes["filter-bar"]}`}>
        <Dropdown
          name={`genre-filter`}
          id={`genre-filter`}
          options={genre}
          placeholder={`Filter By Genre`}
          filterFunction={(e) => {
            setFilterGenre(e.target.value);
          }}
        />
        <Dropdown
          name={`genre-filter`}
          id={`genre-filter`}
          options={author}
          placeholder={`Filter By Author`}
          filterFunction={(e) => {
            setFilterAuthor(e.target.value);
          }}
        />
      </div>
      <div className={`${classes["book-list"]}`}>
        {!loading &&
          filterBook?.map((book, index) => (
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
