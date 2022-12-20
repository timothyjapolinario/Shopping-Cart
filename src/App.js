import "./App.css";
import LandingPage from "./pages/LandingPage";
function App({ cart }) {
  return (
    <div className="App">
      <LandingPage cart={cart} />
    </div>
  );
}

export default App;
