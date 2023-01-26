import React from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";

import style from "react-swipeable-list/dist/styles.css";

import { formatDateTime } from "../helpers";
import iconSavings from "../img/icono_ahorro.svg";
import iconFood from "../img/icono_comida.svg";
import iconHouse from "../img/icono_casa.svg";
import iconExpense from "../img/icono_gastos.svg";
import iconFun from "../img/icono_ocio.svg";
import iconHealth from "../img/icono_salud.svg";
import iconSubscriptions from "../img/icono_suscripciones.svg";

const dictionaryIcons = {
    savings: iconSavings,
    food: iconFood,
    house: iconHouse,
    expenses: iconExpense,
    recreation: iconFun,
    health: iconHealth,
    subscriptions: iconSubscriptions,
};

const Spent = ({ spents }) => {
    const { name, category, id, amount, date } = spents;

    const leadingActions = () => {
        console.log("leadingActions");
    }
    const trailingActions = () => {
        console.log("trailingActions");
    }


    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions}
                trailingActions={trailingActions}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img src={dictionaryIcons[category]} alt={category} />

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
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Spent;
