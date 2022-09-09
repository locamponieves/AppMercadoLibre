import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <div className="notFound">
        <img className="notFound-image" src="notFound.png"></img>

        <h4 className="notFound-title">Parece que esta página no existe</h4>

        <Link to="/" className="notFound-link">
          Ir a la página principal
        </Link>
      </div>
    </>
  );
}
