import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!token) navigate("/login");
    },
    [navigate, token]
  );

  if (token) return children;
}

export default ProtectedRoute;
