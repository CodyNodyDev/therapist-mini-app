import React from "react";
import { useDispatch } from "react-redux";
import { setUserSex } from "../../store/slices/user";
import { genderButtons } from "./meta";
import "./style.css";

const SetSex = () => {
    const dispatch = useDispatch();

    const setSexAction = (sex) => {
        dispatch(setUserSex(sex));
    };

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
