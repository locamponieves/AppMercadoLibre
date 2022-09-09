import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import LoadingPage from "../components/LoadingPage";

export default function Product() {
  const { id } = useParams();
  const [item, setItem] = useState({
    price: {},
  });

  const { formatNumber, setBreadCrumbs } = useContext(SearchContext);

  useEffect(() => {
    getItem();
  }, []);

  async function getItem() {
    const response = await fetch(`http://localhost:3000/item/${id}`);

    const data = await response.json();

    setBreadCrumbs(data.categories);
    setItem(data.item);
  }

  if (Object.entries(item).length === 1) return <LoadingPage />;

  return (
    <article className="productDetail-article">
      <div className="productDetail-image">
        <img src={item.picture}></img>
      </div>

      <div className="productDetail-content">
        <span className="productDetail-estado">
          {item.condition} - {item.sold_quantity} vendidos
        </span>

        <p className="productDetail-title">{item.title}</p>

        <h3 className="productDetail-price">
          {formatNumber(item.price.amount)}
        </h3>

        <button className="productDetail-button">Comprar</button>
      </div>

      <div className="productDetail-descripcion">
        <h2>Descripción del producto</h2>

        <p>{item.description}</p>
      </div>
    </article>
  );
}
