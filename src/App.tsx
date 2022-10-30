import React, { useState } from "react";

import useStart from "./hooks/useStart";
import StartScreen from "./components/Start";
import CardsLayout from "./components/CardsLayout";

function App() {
  const { cards, Start, setCards } = useStart();
  const [screenStart, setScreenStart] = useState("");

  return (
    <div className="min-h-creen w-full bg-zinc-900 text-white relative">
      <StartScreen
        Start={(level: string) => {
          Start(Number(level));
          setScreenStart("-translate-y-full");
        }}
        position={screenStart}
      />
      <CardsLayout
        cards={cards}
        setCards={setCards}
        setScreen={setScreenStart}
      />
    </div>
  );
}

export default App;
