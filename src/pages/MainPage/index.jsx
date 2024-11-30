import React from "react";
import { useSelector } from "react-redux";
import TitleImageContent from "../../components/TitleImageContent";
import "./style.css";

const MainPage = () => {
    const userSex = useSelector((state) => state.user.userSex);

    const startTitle = "Выберите пол";
    const startImage = "[ I M A G E ]";

    //todo: replace to user-title
    const userTitle = "U S E R - T I T L E";
    //todo: replace to user-image
    const userImage = "U S E R - I M A G E";

    return (
        <TitleImageContent
            title={userSex.length !== 0 ? userTitle : startTitle}
            image={userSex.length !== 0 ? userImage : startImage}
            isSexChosen={userSex.length !== 0}
        />
    );
};

export default MainPage;
