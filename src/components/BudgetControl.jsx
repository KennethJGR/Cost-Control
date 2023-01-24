import React from "react";

const BudgetControl = ({ budget }) => {
    const formatBudget = (quantity) => {
        return quantity.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Graph</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Budget: </span>
                    {formatBudget(budget)}
                </p>
                <p>
                    <span>Available: </span>
                    {formatBudget(0)}
                </p>
                <p>
                    <span>Spent: </span>
                    {formatBudget(0)}
                </p>
            </div>
        </div>
    );
};

export default BudgetControl;
