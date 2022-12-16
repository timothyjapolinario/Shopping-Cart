import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import "../styles/RouteSwitch.css";
import BreadList from "../pages/BreadList";
import Shop from "../pages/Shop";
const RouteSwitch = () => {
  return (
    <div className="RouteSwitch">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop/breads" element={<BreadList />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
