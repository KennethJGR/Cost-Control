import React from "react";
import { formatDateTime } from "../helpers";

const Spent = ({ spents }) => {
    const { name, category, id, amount, date } = spents;

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                {/** Imagen */}
                <div className="descripcion-gasto">
                    <p className="categoria">{category}</p>
                    <p className="nombre-gasto">{name}</p>
                    <p className="fecha-gasto">
                        Date:
                        <span>{formatDateTime(date)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">${amount}</p>
        </div>
    );
};

export default Spent;
