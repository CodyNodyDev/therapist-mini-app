import React from "react";
import SetSex from "../SetSex";
import Profile from "../Profile";
import "./style.css";

const TitleImageContent = ({ title, image, isSexChosen }) => {
    return (
        <div className="tic-container">
            <div className="tic-title-container">
                <span className="page-title">{title}</span>
            </div>
            <div className="tic-image-container">
                {/* //todo: insert svt sprite */}
                <div className="image">{image}</div>
            </div>
            <div className="tic-content-container">
                {!isSexChosen ? <SetSex /> : <Profile />}
            </div>
        </div>
    );
};

export default TitleImageContent;
