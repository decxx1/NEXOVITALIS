import About from "./pages-sections/About";
import Cadeid from "./pages-sections/Cadeid";
import Compromiso from "./pages-sections/Compromiso";
import Footer from "./pages-sections/Footer";
import { Home } from "./pages-sections/Home";
import Info from "./pages-sections/Info";

import Nav from "./pages-sections/Nav";
import Servicios from "./pages-sections/Servicios";

function App() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Nav />
      <Home />
      <About />
      <Servicios />
      <Compromiso />
      <Cadeid />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
