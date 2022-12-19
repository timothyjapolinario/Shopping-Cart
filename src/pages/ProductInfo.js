import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import getBreads from "../modules/Breads";
import getCoffees from "../modules/Coffee";
const fetchProduct = (id) => {
  const idInt = parseInt(id);
  const allProducts = [...getBreads(), ...getCoffees()];
  const prod = allProducts.find((prod) => {
    return parseInt(prod.id) === idInt;
  });

  return prod;
};

const ProductInfo = () => {
  const params = useParams();
  const [product, setProduct] = useState(fetchProduct(params.id));
  console.log(fetchProduct(params.id));
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};
export default ProductInfo;
