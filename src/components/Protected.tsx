import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
