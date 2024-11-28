import { useState, useEffect } from "react";
import WebApp from '@twa-dev/sdk'
import "./style.css";

function Header() {
    const [userName, setUserName] = useState("username");

    try {
        setUserName(
            WebApp.initDataUnsafe.user.username
        );
    } catch {
        WebApp.showPopup("У вас отсутствует username.")
    }

    useEffect(() => {
        
    }, [])
    
    return (
        <div className="header">
            <div className="left-side">
                <div className="icon-container">[ i ]</div>
                <div className="username-container">@{userName}</div>
            </div>
            <div className="right-side">
                <div className="level-container">
                    <div className="icon-container">[ i ]</div>
                    <div className="level">5</div>
                </div>
                <div className="wallet-container">
                    <div className="icon-container">[ i ]</div>
                    <div className="wallet">124 124</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
