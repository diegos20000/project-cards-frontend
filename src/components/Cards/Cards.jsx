import React from "react";

const Cards = () => {
    const items = [
        { id: 1, name: 'Item 1', description: 'Descripción 1' },        
        { id: 2, name: 'Item 2', description: 'Descripción 2' },        
        { id: 3, name: 'Item 3', description: 'Descripción 3' },
    ];

    return (
        <div className="cards">
            
            {items.map(item => (
                <div key={item.id} className="card">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <button type="button" className="cards_button">Agregar al Carrito</button>
                </div>
            ))}
        </div>
    );
};

export default Cards;