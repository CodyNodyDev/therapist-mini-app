import React, { useState } from "react";
import SetSex from "../SetSex";
import Profile from "../Profile";
import SvgSelector from "../../assets/SvgSelector/SvgSelector";
import "./style.css";

const TitleImageContent = ({ title, image }) => {
    const [isSexChosen, setIsSexChosen] = useState(false);

    return (
        <div className="tic-container">
            <div className="tic-title-container">
                <span className="page-title">{title}</span>
            </div>
            <div className="tic-image-container">
                <SvgSelector name={isSexChosen ? "avatar" : "gender"} className="image" />
            </div>
            <div className="tic-content-container">
                {!isSexChosen ? <SetSex onSexChosen={setIsSexChosen} /> : <Profile />}
            </div>
        </div>
    );
};

export default TitleImageContent;
