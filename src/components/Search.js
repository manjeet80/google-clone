import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { key, cx } from "../API";
import Show from "./Show";

const Search = ({ search, setSearch }) => {
  const navigate = useNavigate("");

  const goBack = () => {
    navigate("/", { replace: true });
  };

  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState("");

  const searchGoogle = async (e) => {
    e.preventDefault();
  };
  React.useEffect(() => {
    async function getPosts() {
      if (search) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${search}`
          );
          if (response) {
            setResults(response.data.items);
            console.log(response);
            setInfo(response.data.searchInformation);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);
  return (
    <div className="search">
      <div className="search_form">
        <div className="search_logo">
          <img
            src="./images/small_logo.png"
            alt="google-logo"
            onClick={goBack}
          />
        </div>
        <div className="search_input">
          <form className="home_form" onSubmit={searchGoogle}>
            <input
              type="search"
              className="home_search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              required
            />

            <FaSearch className="search_icon" />
            <FaMicrophone className="micro_icon" />
          </form>
        </div>
      </div>
      <Show results={results} info={info} />
    </div>
  );
};

export default Search;
