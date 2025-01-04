import React from "react";
import { useTelegram } from "../../context/TelegramProvider";
import level from "../../assets/level.svg"
import wallet from "../../assets/wallet.svg"
import profile from "../../assets/user.svg"
import "./style.css";

const Header = () => {
    const { user } = useTelegram();

    return (
        <div className="header">
            <div className="left-side">
                <img src = {profile} alt = "user-img" className="header-icon-container" />
                <div className="header-username-container">
                    @{user?.username || "username"}
                </div>
            </div>
            <div className="right-side">
                <div className="header-level-container">
                    <img src = {level} alt = "level-img" className="header-icon-container" />
                    <div className="header-level">5</div>
                </div>
                <div className="header-wallet-container">
                    <img src = {wallet} alt ="wallet-img" className="header-icon-container" /> 
                    <div className="header-wallet">124 124</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
