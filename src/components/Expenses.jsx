import React from "react";
import Spent from "./Spent";

const Expenses = ({ spent, setSpentEdit,deleteSpent }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{spent.length ? "Spents" : "No spents"}</h2>

            {spent.map((spents) => (
                <Spent
                    spents={spents}
                    key={spents.id}
                    setSpentEdit={setSpentEdit}
                    deleteSpent={deleteSpent}
                />
            ))}
        </div>
    );
};

export default Expenses;
