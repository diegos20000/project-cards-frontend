import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";


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
                <p className="ip-description">Una dirección IP (Internet Protocol) es un identificador único para un dispositivo en una red. Puede ser:

                </p>
                <div className="ip-columns">
                    <div className="ip-column">
                        <h3>IP Pública</h3>
                        <p>
                        Es la dirección visible en internet. Permite que los dispositivos se comuniquen entre sí a través de redes globales.
                        Cada vez que te conectas a una página web, esta ve tu IP pública.
                        </p>
                    </div>
                    <div className="ip-column">
                        <h3>IP Privada</h3>
                        <p>
                        Se usa dentro de redes locales, como en hogares u oficinas. No es accesible directamente desde internet.
                        Sirve para que los dispositivos se comuniquen dentro de esa red interna.
                        </p>
                    </div>
                </div>
            
            </section>

            <section className="register-box">
                <p className="register-question">¿Aún no tienes una cuenta?</p>
                <button className="register-button" onClick={onRegisterClick}>Regístrate ahora</button>
            </section> 
        </main>
    );
};

export default Main;