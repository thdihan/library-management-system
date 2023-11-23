import { useEffect, useState } from "react";
import LibrarianApi from "../apis/LibrarianApi";

export const useUserList = (user) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [deleteState, setDeleteState] = useState(false);
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        /**GET ALL USERS */
        const response = await LibrarianApi.get("/get-all-users", {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });

        setLoading(false);
        setUserList(response.data.users);
        console.log("All Users : ", response.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    fetchUserList();
  }, [user.token, deleteState]);

  return {
    userList,
    loading,
    error,
    setDeleteState,
  };
};
