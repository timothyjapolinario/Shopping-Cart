import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import getBreads from "../modules/Breads";
import getCoffees from "../modules/Coffee";
import "../styles/Shop.css";

const Shop = ({ cart }) => {
  const [breads, setBreads] = useState(getBreads());
  const [coffee, setCoffee] = useState(getCoffees());

  const [filter, setFilter] = useState({
    breadFilter: true,
    coffeeFilter: true,
  });

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const renderBreads = () => {
    if (filter.breadFilter) {
      return (
        <div>
          {breads.map((bread) => (
            <Card obj={bread} />
          ))}
        </div>
      );
    }
  };

  const renderCoffees = () => {
    if (filter.coffeeFilter) {
      return (
        <div>
          {filter.coffeeFilter && coffee.map((coff) => <Card obj={coff} />)}
        </div>
      );
    }
  };

  return (
    <div className="Shop bg-pattern">
      <Header cart={cart} />
      <div className="menu-sidebar">
        <div>
          <label htmlFor="bread-filter">Bread</label>
          <input
            id={"bread-filter"}
            type={"checkbox"}
            checked={filter.breadFilter}
            data-testid="bread-filter"
            onChange={() => {
              setFilter({ ...filter, breadFilter: !filter.breadFilter });
            }}
          />
        </div>
        <div>
          <label htmlFor="coffee-filter">Coffee</label>
          <input
            id={"coffee-filter"}
            type={"checkbox"}
            checked={filter.coffeeFilter}
            data-testid="coffee-filter"
            onChange={() => {
              setFilter({ ...filter, coffeeFilter: !filter.coffeeFilter });
            }}
          />
        </div>
      </div>
      <div id="shop-list">
        {renderBreads()}
        {renderCoffees()}
      </div>
    </div>
  );
};

export default Shop;
