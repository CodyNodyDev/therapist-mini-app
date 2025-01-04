import React from "react";
import Header from "../../components/Header";
import "./style.css";

const DefaultLayout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
        </div>
    );
};

export default DefaultLayout;
