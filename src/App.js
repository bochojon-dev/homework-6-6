import "./App.css";
import HeaderTop from "./components/header_top/Header_top";
import HeaderBottom from "./components/header_bottom/Header_bottom";
import Banner from "./components/banner/Banner";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom />
      <Banner />
      <Shop />
    </div>
  );
}

export default App;
