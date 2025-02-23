import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserSex } from "../../store/slices/user";
import { genderButtons } from "./meta";
import TitleImageContent from "../TitleImageContent";
import "./style.css";

const SetSex = ({ onSexChosen }) => {
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState(null);
    const [isSexChosen, setIsSexChosen] = useState(false);

    const getUser = async () => {
        try {
            const response = await fetch("https://therapist-backend-production.up.railway.app/users/");
            const users = await response.json();

            const user = users.find((user) => user.username === "zhm1603");
            if (user) {
                setCurrentUser(user);
                if (user.gender && user.gender !== "none") {
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
        getUser();
    }, []);

    const setSexAction = async (sex) => {
        if (!currentUser || !currentUser.userid) {
            console.error("Ошибка: ID пользователя не найден");
            return;
        }

        if (currentUser.gender && currentUser.gender !== "none") {
            console.log("Пол уже установлен, обновление не требуется.");
            return;
        }

        dispatch(setUserSex(sex));

        try {
            const updatedUser = {
                level: currentUser.level,
                balans: currentUser.balans,
                gender: sex,
            };

            console.log("Обновляем данные пользователя:", updatedUser);

            const updateResponse = await fetch(`https://therapist-backend-production.up.railway.app/users/${currentUser.userid}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser),
            });

            if (!updateResponse.ok) {
                throw new Error(`Ошибка сервера: ${updateResponse.status}`);
            }

            const responseData = await updateResponse.json();
            console.log("Пол успешно обновлён!", responseData);
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
