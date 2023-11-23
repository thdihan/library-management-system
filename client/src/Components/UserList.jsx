import { Link } from "react-router-dom";
import classes from "../styles/UserList.module.css";
import { useUserList } from "../Hooks/useUserList";
import { useAuthContext } from "../Hooks/useAuthContext";
import LibrarianApi from "../apis/LibrarianApi";
export default function UserList() {
  const { user } = useAuthContext();
  const { userList, loading, error, setDeleteState } = useUserList(user);
  // Printing the array to see the data
  console.log(userList);

  async function handleDelete(e, _id) {
    console.log("USER FROM SINGLE", user.token);
    try {
      /**DELETE USER */
      const response = await LibrarianApi.post(
        "/delete-user",
        { _id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("RESPONSE FROM DELETE BUTTON API", response);
      setDeleteState((prev) => !prev);
    } catch (error) {
      console.log("ERROR FROM DELETE BUTTON API", error);
    }
  }
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
          {!loading &&
            userList?.map((singleUser, index) => (
              <tr key={index}>
                <td>{singleUser.username}</td>
                <td>{singleUser.type}</td>
                <td>
                  <button
                    onClick={(e) => {
                      handleDelete(e, singleUser._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
