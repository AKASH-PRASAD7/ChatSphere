import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signIn = async ({ userName, password }) => {
    const success = handleInputErrors(userName, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}api/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ userName, password }),
        }
      );

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signIn };
};
export default useLogin;

function handleInputErrors(userName, password) {
  if (!userName || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
