import { useState } from "react";
import Header from "../Header";
import "./style.css";

function App() {
    return (
        <div className="layout">
            <Header />
            <div className="page-title-container">
                <span className="page-title">Выберите пол</span>
            </div>
            <div className="image-container">
                <div className="image">[ I M A G E ]</div>
            </div>
        </div>
    );
}

export default App;
