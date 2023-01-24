import React from "react";
import { useState } from "react";

const NewBudget = ({ budget, setBudget }) => {
    const [msg, setMsg] = useState("");

    const handleBudget = (e) => {
        e.preventDefault();

        if (budget <= 0 || isNaN(budget)) {
            setMsg("Please, add a valid budget");
            return;
        }
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handleBudget} action="" className="formulario">
                <div className="campo">
                    <label htmlFor="">Define budget</label>

                    <input
                        type="text"
                        className="nuevo-presupuesto"
                        placeholder="Add your budget"
                        value={budget}
                        onChange={(e) => {
                            setBudget(e.target.value);
                        }}
                    />
                </div>

                <input type="submit" value="Save" />

                {msg ? <p className="alerta error">{msg}</p> : null}
            </form>
        </div>
    );
};

export default NewBudget;
