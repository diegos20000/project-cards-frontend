import React, { useState} from 'react';


const RegisterModal = ({ isOpen, onClose}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
        existingUsers.push(formData);
        localStorage.setItem("usuarios", JSON.stringify(existingUsers));

        setFormData({
            nombre: '',
            apellidos: '',
            email: '',
            password: ''
        });

        alert('Registro exitoso!');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose} aria-label="Cerrar modal">X</button>
                <h2>Crear Cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="nombre" 
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange} 
                        placeholder="Apellidos" 
                        required 
                    />
                    <input 
                        type="email"
                        name="email" 
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password"
                        name="password" 
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">Registrarse</button>
                </form>
                
            </div>
        </div>
    );
};

export default RegisterModal;