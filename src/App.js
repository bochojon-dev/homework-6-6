import "./App.css";
import HeaderTop from "./components/header_top/Header_top";
import HeaderBottom from "./components/header_bottom/Header_bottom";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom />
      <Banner />
    </div>
  );
}

export default App;
