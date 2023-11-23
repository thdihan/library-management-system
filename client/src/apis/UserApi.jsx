import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:5001`,
});
/** LOGIN*/

// const response = await UserApi.post(
//     "/login",
//      {username,password},
//     {
//       headers: {
// "Content-Type": "application/json",
//       },
//     }
//   );

/**SIGNUP */
// const response = await UserApi.post(
//     "/signup",
//      {username,password},
//     {
//       headers: {
// "Content-Type": "application/json",
//       },
//     }
//   );

/**BORROW BOOK */
// const response = await UserApi.post(
//     "/borrow-book",
// {bookId},
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );

/**RETURN BOOK */
// const response = await UserApi.post(
//     "/return-book",
// {_id: borrowId},
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );

/**GET BORROWED BOOKS */
// const response = await UserApi.get(
//     "/get-borrowed-books",
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
// "Content-Type": "application/json",
//       },
//     }
//   );
