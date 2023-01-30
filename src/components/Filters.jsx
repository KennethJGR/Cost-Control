import React from "react";
import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
    return (
        <div className="filtros sombra contenedor">
            <form action="">
                <div className="campo">
                    <label htmlFor="">Filter for:</label>

                    <select
                        name=""
                        id=""
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        {" "}
                        <option value="">Select a category</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="house">House expenses</option>
                        <option value="expenses">General expenses</option>
                        <option value="recreation">Recreation</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Filters;
