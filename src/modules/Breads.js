import Menu from "../assets/menu.json";

import croissantImage from "../assets/images/breads/croissant.png";
import frenchBreadImage from "../assets/images/breads/french-bread.png";
import garlicBreadImage from "../assets/images/breads/garlic-bread.png";
import loafImage from "../assets/images/breads/loaf.png";

let breads = {};
const images = [croissantImage, frenchBreadImage, garlicBreadImage, loafImage];
const getBreads = () => {
  breads = Menu.breads.map((bread, index) => {
    const fixedName = bread.name.split("-").reduce((total, curr) => {
      return total + " " + curr.charAt(0).toUpperCase() + curr.slice(1);
    }, "");
    return {
      ...bread,
      name: fixedName,
      imageURL: images[index],
    };
  });
  return breads;
};

export default getBreads;
