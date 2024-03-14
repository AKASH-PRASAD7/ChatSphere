import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ fullName, userName, password, gender }) => {
    const success = handleInputErrors({ fullName, userName, password, gender });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            userName,
            password,
            gender,
          }),
        }
      );

      const data = await res.json();

      // TODO: handle error
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

  return { loading, signup };
};
export default useSignup;

function handleInputErrors({
  fullName,
  userName,
  password,

  gender,
}) {
  if (!fullName || !userName || !password || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
