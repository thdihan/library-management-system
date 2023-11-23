import img from "../assets/book.png";
import classes from "../styles/SingleBook.module.css";
export default function SingleBook({ book }) {
  const { name, author, genre, description } = book;
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
        <button className={`btn`}>Details</button>
        <button className={`btn`}>Edit</button>
        <button className={`btn`}>Delete</button>
      </div>
    </div>
  );
}
