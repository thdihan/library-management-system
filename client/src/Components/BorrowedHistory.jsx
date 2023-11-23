import { useBorrowedBooks } from "../Hooks/useBorrowedBooks";
import { useAuthContext } from "../Hooks/useAuthContext";
import { formatDateAndTime } from "../Utilities";
import classes from "../styles/BorrowedBooks.module.css";
export default function BorrowedHistory() {
  const { user } = useAuthContext();
  const { borrowedBooks, loading } = useBorrowedBooks(user);
  console.log(borrowedBooks);
  return (
    <div className={`${classes["borrowed-books-history"]}  body-area`}>
      <h1>Borrowed History</h1>

      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Borrow Date</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Fine</th>
          </tr>
        </thead>

        <tbody>
          {!loading &&
            borrowedBooks?.map((book, index) => (
              <tr key={index}>
                <td>{book?.bookId?.name}</td>
                <td>{book?.bookId?.author}</td>
                <td>{book?.bookId?.genre}</td>
                <td>{formatDateAndTime(book?.borrowDate).date}</td>
                <td>{formatDateAndTime(book?.returnDate).date}</td>
                <td>{formatDateAndTime(book?.dueDate).date}</td>
                <td>{book?.fine}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
