import React, { useState } from "react";
import { getGeolocation } from "../../utils/ThirdPartyApi";

const Cards = () => {
    const [ipAddress, setIpAddress] = useState("");
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null)

    const handleInputChange = (event) => {
        setIpAddress(event.target.value);
    };

    const handleSearch = () => {
        if (!ipAddress) {
            setError("Por favor ingrese una dirección IP");
            setLocation(null);
            return;
        }

        getGeolocation(ipAddress, (err, data) => {
            if (err) {
                setError("No se pudo obtener la geolocalización. Verifique la dirección IP");
                setLocation(null);
            } else {
                setLocation(data);
                setError(null);
            }
        });
    };


    return (
        <div className="cards" id="ip-section">
            <div className="ip-search">
                <h2>Buscar Ubicación por IP</h2>
                <input 
                    className="input"
                    type="text"
                    placeholder="Ingresar la dirección IP"
                    onChange={handleInputChange}
                 />
                 <button className="cards_button"  onClick={handleSearch}>Buscar</button>
                 {error && <p style={{ color: 'red' }}>{error}</p>}
                 {location && (
                    <div className="location-info">
                        <h3>Información de Ubicación:</h3>
                        <p><strong>País:</strong> {location.country}</p>
                        <p><strong>Ciudad:</strong> {location.city}</p>
                    </div>
                 )}
            </div>
        </div>
    );
};

export default Cards;