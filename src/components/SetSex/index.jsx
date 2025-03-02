import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTelegram } from "../../context/TelegramProvider";
import { setUserSex } from "../../store/slices/user";
import { genderButtons } from "./meta";
import TitleImageContent from "../TitleImageContent";
import "./style.css";

const SetSex = ({ onSexChosen }) => {
    const { user } = useTelegram();
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState(null);
    const [isSexChosen, setIsSexChosen] = useState(false);

    const getUser = async () => {
        try {
            console.log("Запрос пользователей...");
            const response = await fetch("https://therapist-backend-production.up.railway.app/users");
            const users = await response.json();
            console.log("Полученные пользователи:", users);

            const foundUser = users.find((userf) => userf.username === user?.username);

            if (foundUser) {
                console.log("Найденный пользователь:", foundUser);
                setCurrentUser(foundUser);
                if (foundUser.gender && foundUser.gender !== "none") {
                    setIsSexChosen(true);
                    onSexChosen(true);
                }
            } else {
                console.error("Пользователь не найден");
            }
        } catch (error) {
            console.error("Ошибка при загрузке пользователя:", error);
        }
    };

    useEffect(() => {
        console.log("Компонент монтируется, вызываем getUser...");
        getUser();
    }, []);

    useEffect(() => {
        if (currentUser) {
            console.log("Обновленный пользователь:", currentUser);
        }
    }, [currentUser]);

    const setSexAction = async (sex) => {
        if (!currentUser || !currentUser.userid) {
            console.error("Ошибка: ID пользователя не найден");
            return;
        }

        if (currentUser.gender && currentUser.gender !== "none") {
            console.log("Пол уже выбран:", currentUser.gender);
            return;
        }

        dispatch(setUserSex(sex));

        try {
            const updatedUser = {
                level: currentUser.level,
                balans: currentUser.balans,
                gender: sex,
            };

            console.log("Отправка запроса PATCH с данными:", updatedUser);

            const updateResponse = await fetch(`https://therapist-backend-production.up.railway.app/users/${currentUser.userid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser),
            });

            if (!updateResponse.ok) {
                throw new Error("Ошибка сервера");
            }

            const responseData = await updateResponse.json();
            console.log("Ответ от сервера после обновления:", responseData);

            setCurrentUser(responseData.user);
            setIsSexChosen(true);
            onSexChosen(true);
        } catch (error) {
            console.error("Ошибка при обновлении пользователя:", error);
        }
    };

    if (isSexChosen) {
        return <TitleImageContent />;
    }

    return (
        <div className="sex-buttons-container">
            {genderButtons.map((button) => (
                <button
                    key={button.key}
                    className="sex-button"
                    onClick={() => setSexAction(button.key)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default SetSex;
