import React from "react";

const Spent = ({ spents }) => {
    const { name, category, id, amount } = spents;

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{category}</p>
                    <p className="nombre-gasto">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Spent;
