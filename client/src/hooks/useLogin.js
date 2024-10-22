import { useState } from "react";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async ({ username, password }) => {
    setLoading(true);

    try {
      const success = handleInputError({ username, password });

      if (!success) {
        return;
      }
      const res = await apiClient.post("/auth/login", {
        username,
        password,
      });

      if (res.data.error) {
        throw new Error(res.data.Error);
      }
      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setAuthUser(res.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { isLoading, login };
};

export default useLogin;

const handleInputError = ({ username, password }) => {
  if (!username || !password) {
    toast.error("All fields are required...");

    return false;
  }

  return true;
};
