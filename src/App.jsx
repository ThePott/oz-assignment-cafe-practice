import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div>o
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Menu />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
