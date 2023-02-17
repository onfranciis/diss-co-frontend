import Placeholder from "/placeholder.jpg";
import "./styles/Home.scss";
import { Link } from "react-router-dom";
// import { FetchUser } from "./FetchUser";

type homeProps = {
  Token: string | null;
  Username: string | null;
  signOut: () => void;
};

const Home = () => {
  return true ? (
    <div className="HomeLoading">
      <p>Loading</p>
    </div>
  ) : (
    <div className="Home">
      <div className="card">
        <p className="welcome">Welcome!</p>
        <img src="" alt="" height={100} width={100} />
        <p className="user">John Doe</p>
      </div>

      <Link to="/login">
        <p>Log Out</p>
      </Link>
    </div>
  );
};

export default Home;
