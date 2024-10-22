import { useEffect, useState } from "react";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [isLoading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);

      try {
        const res = await apiClient.get("/users");
        if (res.data.error) {
          throw new Error(res.data.error);
        }
        // console.log(res.data);
        setConversation(res.data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { isLoading, conversations };
};

export default useGetConversation;
