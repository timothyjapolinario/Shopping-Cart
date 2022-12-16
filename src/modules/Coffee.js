import Menu from "../assets/menu.json";

import caramelMacchiato from "../assets/images/coffee/caramel-macchiato.png";
import iceAmericano from "../assets/images/coffee/iced-americano.png";
import icedCappucino from "../assets/images/coffee/iced-cappucino.png";
import icedMatchGreenLatte from "../assets/images/coffee/iced-matcha-green-latte.png";

let coffees = {};
const images = [
  caramelMacchiato,
  iceAmericano,
  icedCappucino,
  icedMatchGreenLatte,
];
const getCoffees = () => {
  coffees = Menu.coffee.map((coffee, index) => {
    const fixedName = coffee.name.split("-").reduce((total, curr) => {
      return total + " " + curr.charAt(0).toUpperCase() + curr.slice(1);
    }, "");
    return {
      ...coffee,
      name: fixedName,
      imageURL: images[index],
    };
  });
  return coffees;
};

export default getCoffees;
