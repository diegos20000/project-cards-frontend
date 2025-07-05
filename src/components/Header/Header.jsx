import { useNavigate, useLocation } from "react-router-dom";
import React from "react";


const Header = ({ onRegisterClick}) => {
    const navigate = useNavigate();

    


    return (
        <div className="header">
            <div className="header_logo"></div>
            <div className="header_buttons">
                <button className="header_button">Contactar</button>
                <button className="header_button">Sobre Nosotros</button>
                <button className="header_button" onClick={onRegisterClick}>Registrarse</button>
        </div>
        </div>
    );
};

export default Header;