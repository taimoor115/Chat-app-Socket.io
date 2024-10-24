import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import apiClient from "../utils/apiClient";

const useSignup = () => {
  const [isLoading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await apiClient.post("/auth/signup", {
        fullname,
        username,
        password,
        confirmPassword,
        gender,
      });

      if (res.data.error) {
        throw new Error(res.data.error);
      }
      console.log(res.data);
      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setAuthUser(res.data);
    } catch (error) {
      if (error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { signup, isLoading };
};

export default useSignup;

const handleInputError = ({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required...");

    return false;
  }

  if (confirmPassword !== password) {
    toast.error("Confirm password and password must be same");
    return false;
  }

  if (password.length > 8) {
    toast.error("Password must be greater than 8 characters");
    return false;
  }

  return true;
};
