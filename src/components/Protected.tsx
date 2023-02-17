import { Navigate, Outlet } from "react-router-dom";
import { protectedType } from "../logic/types";

const Protected = ({ Token }: protectedType) => {
  return Token ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
