import React from "react";
import { useState, useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({ spent, budget }) => {
    const [available, setAvailable] = useState(0);
    const [spend, setSpend] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const totalSpent = spent.reduce((acc, curr) => curr.amount + acc, 0);

        const totalAvailable = budget - totalSpent;

        const newPercentage = ((totalSpent / budget) * 100).toFixed(2);

        console.log(newPercentage);

        setSpend(totalSpent);
        setAvailable(totalAvailable);

        setTimeout(() => {
            setPercentage(newPercentage);
        }, 700);
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
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: "#3b82f6",
                        trailColor: "#f5f5f5",
                        textColor: "#3b82f6",
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                />
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
