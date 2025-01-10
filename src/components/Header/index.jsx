import React, { useEffect, useState }from "react";
import { useTelegram } from "../../context/TelegramProvider";
import levelIcon from "../../assets/level.svg"
import walletIcon from "../../assets/wallet.svg"
import profileIcon from "../../assets/user.svg"
import "./style.css";

const Header = () => {
    const { user } = useTelegram();
    const [level, setLevel] = useState(5);
    const [balance, setBalance] = useState(124124);

    const userInfoData = [
        {
            className:"header-level",
            value: level,
            action: setLevel,
            iconPath: levelIcon,
        },
        {
            className: "header-wallet",
            value: balance,
            action: setBalance,
            iconPath: walletIcon,
        },
    ];
    
    //useEffect(())

    const Profile = () =>{
        return(
            <div className="left-side">
                <img 
                    src = {profileIcon} 
                    alt = "user-img" 
                    className="header-icon-container" />
                <div className="header-username-container">
                    @{user?.username || "username"}
                </div>
            </div>
        );
    };

    const ProfileInfo = () =>{
        return(
            <div className="right-side">
                {userInfoData.map((item) =>(
                    <div className="header-data-container">
                        <img
                            src={item.iconPath}
                            alt = "img"
                            className={item.className}
                        />
                        <div className="header-level">{item.value}</div>
                    </div>
            ))}
            </div>
        );
    };

    return (
        <div className="header">
            <Profile />
            <ProfileInfo />
        </div>
    );
}

export default Header;
