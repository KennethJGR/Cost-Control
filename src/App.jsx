import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Expenses from "./components/Expenses";
import { idGenerator } from "./helpers";
import IconNewSpent from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(localStorage.getItem("budget") ?? 0);

  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [spent, setSpent] = useState(
    localStorage.getItem("spent")
      ? JSON.parse(localStorage.getItem("spent"))
      : []
  );
  const [spentEdit, setSpentEdit] = useState({});

  useEffect(() => {
    if (Object.keys(spentEdit).length) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 300);
    }
  }, [spentEdit]);

  useEffect(() => {
    if (budget !== "") {
      localStorage.setItem("budget", budget ?? 0);
    }
  }, [budget]);

  useEffect(() => {
    const budgetLs = localStorage.getItem("budget");

    if (budgetLs > 0) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("spent", JSON.stringify(spent) ?? []);
  }, [spent]);

  const handleNewSpent = () => {
    setModal(true);
    setSpentEdit({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

  const handleBudget = (expense) => {
    if (expense.id) {
      const newSpent = spent.map((spent) =>
        spent.id === expense.id ? expense : spent
      );

      setSpent(newSpent);
    } else {
      expense.id = idGenerator();
      expense.date = Date.now();
      setSpent([...spent, expense]);
    }

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const deleteSpent = (id) => {
    const newSpent = spent.filter((spent) => spent.id !== id);
    setSpent(newSpent);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        spent={spent}
      />

      {isValidBudget && (
        <>
          <main>
            <Expenses
              spent={spent}
              setSpent={setSpent}
              setSpentEdit={setSpentEdit}
              deleteSpent={deleteSpent}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewSpent}
              alt="IconNewSpent"
              onClick={handleNewSpent}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          handleBudget={handleBudget}
          spentEdit={spentEdit}
          setSpentEdit={setSpentEdit}
        />
      )}
    </div>
  );
}

export default App;
