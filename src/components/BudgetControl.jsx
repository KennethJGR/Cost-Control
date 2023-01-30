import React from "react";
import { useState, useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
    spent,
    setSpent,
    budget,
    setBudget,
    setIsValidBudget,
}) => {
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

    const handleReset = () => {
        const resetBudget = window.confirm(
            "Are you sure you want to reset the app?"
        );

        if (resetBudget) {
            setBudget(0);
            setSpent([]);
            setIsValidBudget(false);
        }
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? "#dc2626" : "#3b82f6",
                        trailColor: "#f5f5f5",
                        textColor: percentage > 100 ? "#dc2626" : "#3b82f6",
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                />
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleReset}>
                    Reset App
                </button>

                <p>
                    <span>Budget: </span>
                    {formatBudget(budget)}
                </p>
                <p className={`${available < 0 ? "negativo" : ""}`}>
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
