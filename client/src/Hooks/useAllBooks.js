import { useEffect, useState } from "react";
import LibrarianApi from "../apis/LibrarianApi";

export const useAllBooks = (user) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [deleteState, setDeleteState] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        /**GET ALL BOOKS*/
        const response = await LibrarianApi.get("/get-all-books", {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });

        setLoading(false);
        setBooks(response.data.books);
        console.log("All Books : ", response.data.books);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    fetchBooks();
  }, [user.token, deleteState]);

  return {
    books,
    loading,
    error,
    setDeleteState,
  };
};
