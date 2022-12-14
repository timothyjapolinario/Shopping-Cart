import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import getBreads from "../modules/Breads";
import getCoffees from "../modules/Coffee";
import "../styles/ProductInfo.css";
const fetchProduct = (id) => {
  const idInt = parseInt(id);
  const allProducts = [...getBreads(), ...getCoffees()];
  const prod = allProducts.find((prod) => {
    return parseInt(prod.id) === idInt;
  });

  return prod;
};

const ProductInfo = ({ cart, addItem }) => {
  const params = useParams();
  const [product, setProduct] = useState(fetchProduct(params.id));
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div className="ProductInfo  bg-pattern">
      <div className="content-product-info">
        <div>
          <img
            id="productInfoImage"
            src={product.imageURL}
            alt={product.name + " image"}
          />
        </div>
        <div className="product-info-text">
          <h1 id="pi-product-name">{product.name}</h1>
          <div
            id="add-to-cart-button"
            onClick={() => {
              addItem(product);
            }}
            className="text-button"
          >
            <div>Add To Cart</div>
            <div>{"$" + product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
