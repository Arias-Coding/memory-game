import React, { useState } from "react";

import useStart from "./hooks/useStart";
import StartScreen from "./components/Start";
import CardsLayout from "./components/CardsLayout";

function App() {
  const { cards, Start, setCards } = useStart();
  const [screen, setScreen] = useState<boolean>(true);

  return (
    <div className="min-h-creen bg-zinc-900 text-white relative">
      {screen ? (
        <StartScreen
          Start={(level: string) => {
            Start(Number(level));
            setScreen(false);
          }}
        />
      ) : (
        ""
      )}
      <div className="bg-zinc-900 text-white min-h-screen py-12 flex items-center justify-center">
        <CardsLayout Cards={cards} setCards={setCards} setScreen={setScreen} />
      </div>
    </div>
  );
}

export default App;
