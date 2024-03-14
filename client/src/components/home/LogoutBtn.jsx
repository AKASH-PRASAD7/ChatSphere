import React from "react";
import useLogout from "../../hooks/useSignout";
import { LogOut } from "lucide-react";

const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="ml-8">
      {!loading ? (
        <LogOut
          className="w-6 h-6 text-white hover:text-red-500 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutBtn;
