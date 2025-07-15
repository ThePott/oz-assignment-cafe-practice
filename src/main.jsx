import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MenuContextProvider } from "./context/menuContext.jsx";
import { CartContextProvider } from "./context/cartContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <CartContextProvider>
      <MenuContextProvider>
  
        <App />
  
      </MenuContextProvider>
    </CartContextProvider>
  
  </BrowserRouter>
);
