import { useNavigate } from "react-router-dom";
import React from "react";


const Header = ({ onRegisterClick}) => {
    const scrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    


    return (
        <div className="header">
            <div className="header_logo"></div>
            <div className="header_buttons">
                <button className="header_button" 
                onClick={() => scrollTo("ip-section")}>IP Address</button>
                <button className="header_button" 
                onClick={() => scrollTo("footer")}>Contactar</button>
                <button className="header_button" onClick={onRegisterClick}>Registrarse</button>
        </div>
        </div>
    );
};

export default Header;