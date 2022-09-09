import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState([]);

  const handerClick = () => {
    navigate(`/items/search/${searchTerm}`);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logoNavbar" src="/logo__small.png"></img>
      </Link>

      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Nunca dejes de buscar"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <button onClick={handerClick} type="submit" className="searchButton">
          <FaSearch className="searchIcon" />
        </button>
      </div>
    </nav>
  );
}
