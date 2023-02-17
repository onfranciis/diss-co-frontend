import Placeholder from "/placeholder.jpg";
import "./styles/Home.scss";
import { Link } from "react-router-dom";
import { homePropsType } from "./logic/types";
// import { FetchUser } from "./FetchUser";

const Home = ({ authToken, signOut }: homePropsType) => {
  const { Token, Username } = authToken;
  return Token == null ? (
    <div className="HomeLoading">
      <p>Loading</p>
    </div>
  ) : (
    <div className="Home">
      <div className="card">
        <p className="welcome">Welcome!</p>
        <img src="" alt="" height={100} width={100} />
        <p className="user">{Username}</p>
      </div>

      <Link to="/login">
        <p>Log Out</p>
      </Link>
    </div>
  );
};

export default Home;
