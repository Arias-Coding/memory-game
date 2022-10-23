import React, { useState } from "react";

import useGame from "./hooks/useGame";
import StartScreen from "./components/Start";
import CardsLayout from "./components/CardsLayout";

function App() {
  const { cards, Start, setCards } = useGame();
  const [screen, setScreen] = useState<boolean>(true);

  return (
    <div className="min-h-creen bg-zinc-900 text-white relative">
      {screen ? <StartScreen setScreen={setScreen} setStart={Start} /> : ""}
      <div className="bg-zinc-900 text-white min-h-screen flex items-center justify-center">
        <CardsLayout Cards={cards} setCards={setCards} setScreen={setScreen} />
      </div>
    </div>
  );
}

export default App;
