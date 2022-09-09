import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Search({ item }) {
  const { formatNumber } = useContext(SearchContext);

  return (
    <article className="article-card">
      <div className="img-box">
        <Link to={`/items/${item.id}`}>
          <img src={item.picture} />
        </Link>
      </div>

      <div className="article-content">
        <Link to={`/items/${item.id}`}>
          <h3 className="article-title">{formatNumber(item.price.amount)}</h3>
        </Link>

        <Link to={`/items/${item.id}`}>
          <p className="article-text">{item.title}</p>
        </Link>
      </div>

      <p className="article-content-condition">{item.condition}</p>
    </article>
  );
}
