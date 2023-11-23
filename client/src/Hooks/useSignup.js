import { useState } from "react";
import UserApi from "../apis/UserApi";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async ({ username, password, type }) => {
    setIsLoading(true);
    setError(null);
    console.log("HOOK CALLED");
    try {
      const response = await UserApi.post(
        "/signup",
        { username, password, type },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      setIsLoading(false);
      return { data: data };
    } catch (err) {
      console.log(err.message);
      setError(err);
      setIsLoading(false);
      return { err };
    }
  };
  return { signup, isLoading, error };
};
