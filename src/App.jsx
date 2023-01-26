import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Expenses from "./components/Expenses";
import { idGenerator } from "./helpers";
import IconNewSpent from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [spent, setSpent] = useState([]);

  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

  const handleBudget = (expense) => {
    expense.id = idGenerator();
    expense.date = Date.now();
    setSpent([...spent, expense]);

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
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
            <Expenses spent={spent} setSpent={setSpent} />
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
        />
      )}
    </div>
  );
}

export default App;
