import React from "react";
import { useDispatch } from "react-redux";
import { setUserSex } from "../../store/slices/user";
import "./style.css";

const SetSex = () => {
    const dispatch = useDispatch();

    const setSexAction = (sex) => {
        dispatch(setUserSex(sex));
    };

    return (
        <div className="sex-buttons-container">
            {/* //todo: create custom button component */}
            <button className="sex-button" onClick={() => setSexAction("male")}>
                [ Мужчина ]
            </button>
            <button
                className="sex-button"
                onClick={() => setSexAction("female")}
            >
                [ Девушка ]
            </button>
        </div>
    );
};

export default SetSex;
