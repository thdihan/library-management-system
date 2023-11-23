db = connect("mongodb://127.0.0.1:27017/Lab5");

db.books.insertMany([
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
]);
