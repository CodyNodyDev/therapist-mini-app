import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import MainPage from "../../pages/MainPage";
import "./style.css";

const App = () => {
    return (
        <DefaultLayout>
            <MainPage />
        </DefaultLayout>
    );
};

export default App;
