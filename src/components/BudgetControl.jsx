import React from "react";
import { useState, useEffect } from "react";

const BudgetControl = ({ spent, budget }) => {
    const [available, setAvailable] = useState(0);
    const [spend, setSpend] = useState(0);

    useEffect(() => {
        const totalSpent = spent.reduce((acc, curr) => curr.amount + acc, 0);

        const totalAvailable = budget - totalSpent;

        setSpend(totalSpent);
        setAvailable(totalAvailable);
    }, [spent]);

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
                    {formatBudget(available)}
                </p>
                <p>
                    <span>Spent: </span>
                    {formatBudget(spend)}
                </p>
            </div>
        </div>
    );
};

export default BudgetControl;
