import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import CatFarm from "./components/CatFarm";
import CatStore from "./components/CatStore";
import Home from "./components/Home";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

const Layout = () => (
  <div>
    <NavBar />
    <Main>
      <Outlet />
    </Main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cat-store" element={<CatStore />} />
          <Route path="cat-farm" element={<CatFarm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
