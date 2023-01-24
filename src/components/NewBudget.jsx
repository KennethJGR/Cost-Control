import React from "react";

const NewBudget = ({ budget, setBudget }) => {
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form action="" className="formulario">
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
            </form>
        </div>
    );
};

export default NewBudget;
