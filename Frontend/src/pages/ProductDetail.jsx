import Navbar from "../components/Navbar";
import Product from "../components/Product";
import BreadCrumbs from "../components/BreadCrumbs";

export default function ProductDetail() {
  return (
    <>
      <Navbar />

      <BreadCrumbs />

      <div className="productDetail">
        <Product />
      </div>
    </>
  );
}
