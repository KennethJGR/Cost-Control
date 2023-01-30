import React from "react";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget,
    spent,
    setSpent,
}) => {
    return (
        <header>
            <h1>Expense planner</h1>

            {isValidBudget ? (
                <BudgetControl
                    budget={budget}
                    setBudget={setBudget}
                    spent={spent}
                    setSpent={setSpent}
                    setIsValidBudget={setIsValidBudget}
                />
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}
        </header>
    );
};

export default Header;
