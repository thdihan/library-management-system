import { Link } from "react-router-dom";
import classes from "../styles/UserList.module.css";
export default function UserList() {
  let usersArray = [
    {
      username: "john_doe123",
      userType: "standard",
    },
    {
      username: "jane_smith456",
      userType: "premium",
    },
    {
      username: "mike_jackson78",
      userType: "standard",
    },
    {
      username: "sara_williams90",
      userType: "premium",
    },
    {
      username: "chris_evans22",
      userType: "standard",
    },
    {
      username: "emily_brown789",
      userType: "premium",
    },
    {
      username: "david_clark23",
      userType: "standard",
    },
    {
      username: "olivia_taylor567",
      userType: "premium",
    },
    {
      username: "andrew_jenkins45",
      userType: "standard",
    },
    {
      username: "lucy_miller678",
      userType: "premium",
    },
    {
      username: "mark_roberts56",
      userType: "standard",
    },
    {
      username: "anna_carter321",
      userType: "premium",
    },
  ];

  // Printing the array to see the data
  console.log(usersArray);

  return (
    <div className={`${classes["user-list-component"]} body-area`}>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersArray?.map((singleUser, index) => (
            <tr key={index}>
              <td>{singleUser.username}</td>
              <td>{singleUser.userType}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
