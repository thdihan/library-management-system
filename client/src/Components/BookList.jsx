import classes from "../styles/BookList.module.css";
import SingleBook from "./SingleBook";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
export default function BookList() {
  const books = [
    {
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      description:
        "A story of teenage angst and alienation, following the experiences of Holden Caulfield in New York City.",
    },
    {
      name: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description:
        "An epic fantasy series detailing the journey to destroy the One Ring and defeat the Dark Lord Sauron.",
    },
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      description:
        "Set in the American South, it tells the story of racial injustice through the eyes of a young girl, Scout Finch.",
    },
    {
      name: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      description:
        "A bleak vision of a totalitarian future society controlled by a tyrannical government, Big Brother.",
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Classic Literature",
      description:
        "A romantic novel exploring societal norms, marriage, and the relationships of the English gentry.",
    },
    {
      name: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure",
      description:
        "The story of Captain Ahab's obsessive quest for revenge on the white whale, Moby Dick.",
    },
    {
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description:
        "A fantasy adventure following Bilbo Baggins as he embarks on a quest to reclaim the treasure guarded by Smaug.",
    },
    {
      name: "Frankenstein",
      author: "Mary Shelley",
      genre: "Gothic Fiction",
      description:
        "A tale of scientific hubris and its consequences, focusing on the creation of a sentient creature.",
    },
    {
      name: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      genre: "Mystery",
      description:
        "A collection of detective stories featuring Sherlock Holmes and Dr. Watson solving intriguing cases.",
    },
    {
      name: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      genre: "Gothic Fiction",
      description:
        "A philosophical novel exploring the nature of beauty, morality, and the consequences of vanity.",
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      description:
        "A story of self-discovery and following one's dreams, wrapped in allegorical themes.",
    },
    {
      name: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Young Adult/Dystopian",
      description:
        "In a dystopian society, teenagers fight to the death in a televised spectacle for the entertainment of the elite.",
    },
  ];

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
        {books?.map((book, index) => (
          <SingleBook key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
