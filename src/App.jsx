import { useState } from "react";
import Header from "./components/Header";
import IconNewSpent from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 5000);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className="nuevo-gasto">
          <img src={IconNewSpent} alt="IconNewSpent" onClick={handleNewSpent} />
        </div>
      )}

      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  );
}

export default App;
