import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import "../styles/RouteSwitch.css";
import Shop from "../pages/Shop";
import ProductInfo from "../pages/ProductInfo";
const RouteSwitch = () => {
  return (
    <div className="RouteSwitch">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
