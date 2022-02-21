import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = ({ search, setSearch }) => {
  const navigate = useNavigate("");
  const searchGoogle = (e) => {
    navigate("/search", { replace: true });
  };
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_logo">
          <img src="./images/google_logo.png" alt="Logo" />
        </div>
        <form className="home_form" onSubmit={searchGoogle}>
          <input
            type="search"
            className="home_search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            required
          />

          <div className="home_group">
            <input type="submit" className="home_btn" value="Google Search" />
          </div>
          <FaSearch className="search_icon" />
          <FaMicrophone className="micro_icon" />
        </form>
      </div>
    </div>
  );
};

export default Home;
