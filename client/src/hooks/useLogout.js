import { useState } from "react";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [isLoading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await apiClient.post("/auth/logout");

      if (res.data.error) {
        throw new Error(res.data.Error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { isLoading, logout };
};

export default useLogout;
