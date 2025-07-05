import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import "./Main.css";

const Main = ({ location, onRegisterClick}) => {
    const [data, setData] = useState([]);

   /* useEffect(() => {
        const fetchData = async () = > {
            const response = await fetch("...");
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);*/
    
    return (
        <main className="main-container">
            <Cards data={data} location={location} />
            <section className="ip-info" >
            <h2 className="main-title">¿Qué es una dirección IP?</h2>
            <p className="ip-description">Una dirección IP (Internet Protocol) es un identificador único para un dispositivo en una red. Puede ser:</p>
            <ul className="ip-types">
                <li><strong>IP Pública:</strong> Es visible en internet y permite que los dispositivos se comuniquen a través de redes.</li>
                    <li><strong>IP Privada:</strong> Se usa dentro de redes locales (como la de tu hogar u oficina) y no es accesible desde internet directamente.</li>
            </ul>
            </section>

            <section className="register-box">
                <p className="register-question">¿Aún no tienes una cuenta?</p>
                <button className="register-button" onClick={onRegisterClick}>Regístrate ahora</button>
            </section> 
        </main>
    );
};

export default Main;