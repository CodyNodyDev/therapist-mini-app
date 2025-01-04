import React from "react";
import ReactDOM from "react-dom/client";
import { TelegramProvider } from "./context/TelegramProvider";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <TelegramProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </TelegramProvider>
    </Provider>
);
