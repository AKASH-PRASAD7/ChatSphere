import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }api/message/65f2c8f2ac74b668d80bed29`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await res.json();
        if (!data.success) {
          throw new Error(data.message);
        }
        setMessages(data.messages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [setMessages]);

  return { messages, loading };
};
export default useGetMessages;
