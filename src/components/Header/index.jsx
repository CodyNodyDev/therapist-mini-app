import React, { useState, useEffect } from "react";
import { useTelegram } from "../../context/TelegramProvider";
import SvgSelector from "../../assets/SvgSelector/SvgSelector";
import "./style.css";

const Header = () => {
  const { user } = useTelegram();
  const [level, setLevel] = useState(5);
  const [balance, setBalance] = useState(124124);
  const [currentUser, setCurrentUser] = useState({});

  const getUser = () => {
    const url = "http://localhost:3011/api/users";
    fetch(url)
      .then((response) => response.json())
      .then((userData) => setCurrentUser(userData.find((userf) => userf.username === "zhm1603" )));
  };
  
  const userInfoData = [
    {
      className: "header-level",
      value: currentUser.level,
      action: setLevel,
      id: "level",
    },
    {
      className: "header-wallet",
      value: currentUser.balans,
      action: setBalance,
      id: "wallet",
    },
  ];
  useEffect(() => {
    // if (!user || !user.username) {
    //     return;
    // }
    getUser();
}, []);


  const Profile = () => (
    <div className="left-side">
      <SvgSelector name={"user"} />
      <div className="header-username-container">
        @{user?.username || "username"}
      </div>
    </div>
  );

  const ProfileInfo = () => (
    <div className="right-side">
      {userInfoData.map((item) => (
        <div className="header-data-container" key={item.id}>
          <SvgSelector name={item.id} className={item.className} />
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
