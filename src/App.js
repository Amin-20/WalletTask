import "./App.css";
import Start from "./Start";
import Main from "./Main";
import React, { useState, useEffect } from "react";

function App() {
  const [currentCards, setCurrentCard] = useState(null);

  const handleSelectWallet = (wallet) => {
    setCurrentCard(wallet);
  };

  useEffect(() => {
    console.log("New current:", currentCards);
  }, [currentCards]);

  return (
    <div className="App">
      <Start onSelectWallet={handleSelectWallet}></Start>
      {currentCards != null ? <Main currentCards={currentCards}></Main> : null}
    </div>
  );
}

export default App;
