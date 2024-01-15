import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalState } from "./context/ModalContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ModalState>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ModalState>
  </BrowserRouter>
);
