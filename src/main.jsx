import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WebApp from '@twa-dev/sdk'
import App from "./components/App/index.jsx";
import "./style.css";

WebApp.ready();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
