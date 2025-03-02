import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTelegram } from "../../context/TelegramProvider";
import { setUserSex } from "../../store/slices/user";
import { genderButtons } from "./meta";
import TitleImageContent from "../TitleImageContent";
import { fetchUsers, updateUser } from "../../api/api";
import "./style.css";

const SetSex = ({ onSexChosen }) => {
    const { user } = useTelegram();
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState(null);
    const [isSexChosen, setIsSexChosen] = useState(false);

    const getUser = async () => {
        try {
            const users = await fetchUsers();
            const foundUser = users.find((userf) => userf.username === "zhm1603");

            if (foundUser) {
                setCurrentUser(foundUser);
                if (foundUser.gender && foundUser.gender !== "none") {
                    setIsSexChosen(true);
                    onSexChosen(true);
                }
            }
        } catch (error) {
            console.error("Ошибка при загрузке пользователя:", error);
        }
    };

    useEffect(() => {
        // if (user?.username) {
            getUser();
        // }
    }, [/*user*/]);

    const setSexAction = async (sex) => {
        if (!currentUser?.userid || (currentUser.gender && currentUser.gender !== "none")) {
            return;
        }

        dispatch(setUserSex(sex));

        try {
            const updatedUser = {
                level: currentUser.level,
                balans: currentUser.balans,
                gender: sex,
            };

            const responseData = await updateUser(currentUser.userid, updatedUser);
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
                <button key={button.key} className="sex-button" onClick={() => setSexAction(button.key)}>
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default SetSex;
