import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Инициализация Telegram Web App
        const tg = window.Telegram.WebApp;
        tg.ready(); // Сообщаем Telegram, что приложение готово.

        // Получаем имя пользователя
        const user = tg.initDataUnsafe?.user;
        if (user) {
            setUsername(
                user.username || `${user.first_name} ${user.last_name}`
            );
        }
    }, []);

    return (
        <div className="app">
            <h1>Привет, {username ? username : "@username"}!</h1>
            <p>Добро пожаловать в наше Telegram Mini App!</p>
        </div>
    );
}

export default App;
