import React, { useState } from "react";
import { useTelegram } from "../../context/TelegramProvider";
import ImageViewer from "../ImageViewer/index.tsx";
import "./style.css";

const Header = () => {
  const { user } = useTelegram();
  const [level, setLevel] = useState(5);
  const [balance, setBalance] = useState(124124);

  const userInfoData = [
    {
      className: "header-level",
      value: level,
      action: setLevel,
      id: "level",
    },
    {
      className: "header-wallet",
      value: balance,
      action: setBalance,
      id: "wallet",
    },
  ];

  const Profile = () => (
    <div className="left-side">
      <ImageViewer id="user" alt="User avatar" className="header-icon-container" />
      <div className="header-username-container">
        @{user?.username || "username"}
      </div>
    </div>
  );

  const ProfileInfo = () => (
    <div className="right-side">
      {userInfoData.map((item) => (
        <div className="header-data-container" key={item.id}>
          <ImageViewer id={item.id} alt="Icon" className={item.className} />
          <div className="header-value">{item.value}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="header">
      <Profile />
      <ProfileInfo />
    </div>
  );
};

export default Header;
