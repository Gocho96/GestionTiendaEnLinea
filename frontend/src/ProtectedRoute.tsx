import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./components/Context/AuthContext";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  console.log(loading, isAuthenticated);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
