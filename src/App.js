import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import HomeBanner from "./components/HomeBanner";
import MyGallery from "./components/MyGallery";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path={"/"} element={<Home />}>
        <Route path={"/"} element={<HomeBanner />} />
        <Route path={"about"} element={<AboutUs />} />
        <Route path={"menu"} element={<Menu />} />
        <Route path={"gallery"} element={<MyGallery />} />
        <Route path={"contact"} element={<Contact />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
