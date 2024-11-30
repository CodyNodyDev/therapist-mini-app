import React from "react";
import { useTelegram } from "../../context/TelegramProvider";
import "./style.css";

const Header = () => {
    const { user } = useTelegram();

    return (
        <div className="header">
            <div className="left-side">
                <div className="header-icon-container">[ i ]</div>
                <div className="header-username-container">
                    @{user?.username || "username"}
                </div>
            </div>
            <div className="right-side">
                <div className="header-level-container">
                    <div className="header-icon-container">[ i ]</div>
                    <div className="header-level">5</div>
                </div>
                <div className="header-wallet-container">
                    <div className="header-icon-container">[ i ]</div>
                    <div className="header-wallet">124 124</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
