import React from "react";
import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({ spent, budget }) => {
    const [available, setAvailable] = useState(0);
    const [spend, setSpend] = useState(0);

    useEffect(() => {
        const totalSpent = spent.reduce((acc, curr) => curr.amount + acc, 0);

        const totalAvailable = budget - totalSpent;

        setSpend(totalSpent);
        setAvailable(totalAvailable);
    }, [spent]);

    const percentage = () => {
        const totalSpent = spent.reduce((acc, curr) => curr.amount + acc, 0);

        const totalAvailable = budget - totalSpent;
        return totalAvailable;
    };

    const formatBudget = (quantity) => {
        return quantity.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar value={budget} />
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
