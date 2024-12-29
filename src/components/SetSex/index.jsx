import React from "react";
import { useDispatch } from "react-redux";
import { setUserSex } from "../../store/slices/user";
import "./style.css";

const SetSex = () => {
    const dispatch = useDispatch();

    const setSexAction = (sex) => {
        dispatch(setUserSex(sex));
    };

    const genderButtons = [
        {
            key: "male",
            label: "Мужчина"
        },
        {
            key: "female",
            label: "Девушка"
        }
    ];

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
