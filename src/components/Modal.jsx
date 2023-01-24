import React from "react";
import CloseIcon from "../img/cerrar.svg";

const Modal = ({ setModal }) => {
    const closeModal = () => {
        setModal(false);


    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseIcon} alt="CloseIcon" onClick={closeModal} />
            </div>

            <form action="" className="formulario">
                <legend> New Spent </legend>
                <div className="campo">
                    <label htmlFor="">Spent name</label>

                    <input type="text" />
                </div>
            </form>
        </div>
    );
};

export default Modal;
