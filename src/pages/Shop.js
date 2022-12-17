import { useState } from "react";
import Menu from "../assets/menu.json";
import Card from "../components/Card";
import Header from "../components/Header";
import getBreads from "../modules/Breads";
import getCoffees from "../modules/Coffee";
import "../styles/Shop.css";
const importImages = (r) => {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};

const Shop = () => {
  const [breads, setBreads] = useState(getBreads());
  const [coffee, setCoffee] = useState(getCoffees());

  const [filter, setFilter] = useState({
    breadFilter: false,
  });

  return (
    <div className="Shop bg-pattern">
      <Header />
      <div className="menu-sidebar">
        <input type={"checkbox"} data-testid="bread-filter" />
      </div>
      <div id="shop-list">
        <div>
          {breads.map((bread) => (
            <Card obj={bread} />
          ))}
        </div>
        <div>
          {coffee.map((coff) => (
            <Card obj={coff} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
