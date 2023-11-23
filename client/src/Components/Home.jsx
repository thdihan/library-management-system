import BookList from "./BookList";
import SingleBook from "./SingleBook";

export default function Home() {
  return (
    <div className={`body-area`}>
      <h1>All Books</h1>

      <BookList />
    </div>
  );
}
