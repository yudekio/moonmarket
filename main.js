import ReactDOM from "react-dom/client";
import App from "./src/App.tsx";
import "./index.css";
import { ModalState } from "./src/context/ModalContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./src/components/ThemeProvider.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ModalState>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ModalState>
  </BrowserRouter>
);
