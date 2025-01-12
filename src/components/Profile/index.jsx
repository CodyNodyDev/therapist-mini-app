import React from "react";
import { UserDescription } from "./meta";
import "./style.css";

const Profile = () => {
    return (
        <div className="profile-container">
            <span className="profile-container-title">Описание</span>
            <div className="profile-description">{UserDescription.START}</div>
        </div>
    );
};

export default Profile;
