import { useTelegram } from "../../hooks/TelegramProvider";
import "./style.css";

function Header() {
    const { user, webApp } = useTelegram();

    return (
        <div className="header">
            <div className="left-side">
                <div className="icon-container">[ i ]</div>
                <div className="username-container">@{user}</div>
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
