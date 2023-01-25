import { useState } from "react";
import React from "react";
import CloseIcon from "../img/cerrar.svg";

const Modal = ({ setModal, animateModal, setAnimateModal, handleBudget }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([name, amount, category].includes("")) {
            setMsg("All fields are required");

            setTimeout(() => {
                setMsg("");
            }, 2500);
            return;
        }


        handleBudget({ name, amount, category })


    };

    const closeModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 300);
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseIcon} alt="CloseIcon" onClick={closeModal} />
            </div>

            <form
                action=""
                className={`formulario ${animateModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <legend> New Spent </legend>

                {msg ? <p className="alerta error">{msg}</p> : null}

                <div className="campo">
                    <label htmlFor="name">Spent name</label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Add a new Spent"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="amount">Amount</label>

                    <input
                        id="amount"
                        type="number"
                        placeholder="Add an amount"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="category">Category</label>

                    <select
                        name=""
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select a category</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="house">House expenses</option>
                        <option value="expenses">General expenses</option>
                        <option value="fun">Recreation</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
                <input type="submit" value="Add Spent" />
            </form>
        </div>
    );
};

export default Modal;
