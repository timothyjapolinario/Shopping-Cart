import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import "../styles/RouteSwitch.css";
import Bread from "./Bread";
const RouteSwitch = () => {
  return (
    <div className="RouteSwitch">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop/breads" element={<Bread />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
