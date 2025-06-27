import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header_image"></div>
            <h1 className="header_title">Alpaca Luxury</h1>
            <button className="header_button">Inscribirse</button>
            
        </div>
    );
};

export default Header;