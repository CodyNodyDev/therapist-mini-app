import React, { useState, useEffect } from "react";
import { useTelegram } from "../../context/TelegramProvider";
import { fetchUsers } from "../../api/api"; 
import SvgSelector from "../../assets/SvgSelector/SvgSelector";
import "./style.css";

const Header = () => {
  const { user } = useTelegram();
  const [currentUser, setCurrentUser] = useState({ level: 0, balans: 0 });


  const getUser = async () => {
    try {
      const users = await fetchUsers(); 
      const userData = users.find((u) => u.username === "zhm1603");
      console.log(userData,"1");
      if (userData) {
        setCurrentUser(userData);
      }
    } catch (error) {
      console.error("Ошибка при загрузке пользователя:", error);
    }
  };

  useEffect(() => {
    // if (user?.username) {
      getUser();
    // }
  }, []);

  const userInfoData = [
    { className: "header-level", value: currentUser.level || "—", id: "level" },
    { className: "header-wallet", value: currentUser.balans || "—", id: "wallet" },
  ];

  const Profile = () => (
    <div className="left-side">
      <SvgSelector name="user" />
      <div className="header-username-container">@{user?.username || "username"}</div>
    </div>
  );

  const ProfileInfo = () => (
    <div className="right-side">
      {userInfoData.map(({ id, className, value }) => (
        <div className="header-data-container" key={id}>
          <SvgSelector name={id} className={className} />
          <div className="header-value">{value}</div>
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
