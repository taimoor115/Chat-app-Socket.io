import { useState } from "react";
import useConversation from "../zustand/useConversation";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";

const useSendMessages = () => {
  const [isLoading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    console.log("🚀 ~ sendMessage ~ message:", message);
    setLoading(true);

    try {
      const res = await apiClient.post(
        `/messages/send/${selectedConversation._id}`,
        {
          message,
        }
      );

      if (res.data.error) {
        throw new Error(res.data.error);
      }

      console.log(res.data);

      setMessages([...messages, res.data]);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, isLoading };
};

export default useSendMessages;
