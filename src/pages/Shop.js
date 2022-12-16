import { useState } from "react";
import Menu from "../assets/menu.json";
import Card from "../components/Card";
import Header from "../components/Header";

const importImages = (r) => {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};

const setupMenu = () => {
  const breadImages = importImages(
    require.context("../assets/images/breads", false, /\.(png)$/)
  );

  Menu.breads = Menu.breads.map((bread) => {
    return {
      ...bread,
      imageURL: breadImages[bread.name + ".png"],
    };
  });

  const coffeeImages = importImages(
    require.context("../assets/images/coffee", false, /\.(png)$/)
  );

  Menu.coffee = Menu.coffee.map((coffee) => {
    return {
      ...coffee,
      imageURL: coffeeImages[coffee.name + ".png"],
    };
  });
};

const Shop = () => {
  setupMenu();

  const [breads, setBreads] = useState(Menu.breads);
  const [coffee, setCoffee] = useState(Menu.coffee);

  return (
    <div className="Shop">
      <Header />
      <div>
        {breads.map((bread) => {
          return <Card obj={bread} />;
        })}
      </div>
      <div>
        {coffee.map((coffee) => {
          return <Card obj={coffee} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
