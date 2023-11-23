import { useEffect, useState } from "react";
import LibrarianApi from "../apis/LibrarianApi";
import UserApi from "../apis/UserApi";

export const useBorrowedBooks = (user) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [borrowedBooks, setBooks] = useState([]);
  const [deleteState, setDeleteState] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        /**GET BORROWED BOOKS */
        const response = await UserApi.get("/get-borrowed-books", {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });

        setLoading(false);
        setBooks(response.data.borrowedBooks);
        console.log("All Books : ", response.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    fetchBooks();
  }, [user.token, deleteState]);

  return {
    borrowedBooks,
    loading,
    error,
    setDeleteState,
  };
};
