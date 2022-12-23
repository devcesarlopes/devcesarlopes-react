import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./assets/fonts/laila-medium.ttf";
import "./assets/fonts/museomoderno-black.ttf";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <HashRouter basename="/">
        <App />
    </HashRouter>
);
reportWebVitals();
