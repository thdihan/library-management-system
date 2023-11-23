import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:5001/librarian`,
});

/**GET ALL USERS */
// const response = await LibrarianApi.get(
//     "/get-all-users",
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );

/**DELETE USER */
// const response = await LibrarianApi.delete(
//     "/delete-user",
// {_id},
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );

/**ADD BOOK */
// const response = await LibrarianApi.post(
//     "/add-book",
// { name, author, genre, description },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );

/**GET ALL BOOKS*/
// const response = await LibrarianApi.get(
//     "/get-all-books",
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );

/**DELETE A BOOK*/
// const response = await LibrarianApi.delete(
//     "/delete-book",
// { name, author, genre, description },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );

/**UPDATE BOOK */
// const response = await LibrarianApi.put(
//     "/update-book",
// { _id, name, author, genre, description },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );
