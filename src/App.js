import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import CatFarm from "./pages/CatFarm";
import CatStore from "./pages/CatStore";
import Home from "./pages/Home";
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
