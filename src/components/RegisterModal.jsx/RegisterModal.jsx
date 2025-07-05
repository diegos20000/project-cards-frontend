import React from 'react';
import './RegisterModal.css';

const RegisterModal = ({ isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Crear Cuenta</h2>
                <form>
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Apellidos" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Contraseña" required />
                    <button type="submit">Registrarse</button>
                </form>
                <button className="close-button" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default RegisterModal;