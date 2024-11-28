import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WebApp from "@twa-dev/sdk";
import { TelegramProvider } from "./hooks/TelegramProvider/index.jsx";
import App from "./components/App/index.jsx";
import "./style.css";

WebApp.ready();

createRoot(document.getElementById("root")).render(
    <TelegramProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </TelegramProvider>
);
