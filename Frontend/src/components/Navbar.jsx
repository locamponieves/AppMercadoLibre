import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState([]);
  const [disabledButton, setDisabledButton] = useState(true);

  const handerClick = () => {
    if (searchTerm.length != 0) {
      setDisabledButton(false);

      navigate(`/items/search/${searchTerm}`);
    }
  };

  useEffect(() => {
    setDisabledButton(false);
  }, [searchTerm]);

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

        <button
          onClick={handerClick}
          disabled={disabledButton}
          type="submit"
          className="searchButton"
        >
          <FaSearch className="searchIcon" />
        </button>
      </div>
    </nav>
  );
}
