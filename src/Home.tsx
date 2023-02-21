import "./styles/Home.scss";
import { Link } from "react-router-dom";
import { homePropsType } from "./logic/types";
import { axiosUserRequest } from "./logic/requests";
import { useState } from "react";
const url = import.meta.env.VITE_FETCH_DETAILS;
const method = "post";

const Home = ({ authToken, signOut }: homePropsType) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const { Token, Username } = authToken;

  axiosUserRequest({
    url,
    method,
    data: { username: Username!, token: Token },
  }).then((res) => {
    setImage(res.image);
    setName(res.name);
  });

  return image == "" ? (
    <div className="HomeLoading">
      <p>Loading</p>
    </div>
  ) : (
    <div className="Home">
      <div className="card">
        <p className="welcome">Welcome!</p>
        <img src={image} alt="" height={100} width={100} />
        <p className="user">{name}</p>
      </div>

      <Link to="/login">
        <p onClick={signOut}>Log Out</p>
      </Link>
    </div>
  );
};

export default Home;
