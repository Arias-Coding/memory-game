import React, { useEffect, useRef, useState } from "react";
import Card from "./components/Card";

const iconst = ["fa-solid fa-diamond", "fa-solid fa-heart"];

interface card {
  id: number;
  icon: string;
  status: boolean;
}

function App() {
  const [cards, setCards] = useState<card[]>([]);
  const [id, setId] = useState<number>(-1);
  const [beforeClassList, setclassList] = useState<Element["classList"] | null>(
    null
  );

  useEffect(() => {
    const newCards = [];

    for (let index = 0; index < 4; index++) {
      const cardId = Math.trunc(Math.random() * 9999);
      newCards[index] = {
        id: cardId,
        icon: "fa-solid fa-club",
        status: false,
      };
    }

    let newNewCards: card[] = [];

    while (newNewCards.length < 8) {
      const selectCard = newCards[Math.trunc(Math.random() * newCards.length)];

      let acc = 0;
      newNewCards.map((e) => {
        if (e.id == selectCard.id) {
          acc++;
        }
      });

      if (acc < 2) newNewCards = [...newNewCards, selectCard];
    }

    setCards(newNewCards);
  }, []);

  const selectCard = (card: card, classList: Element["classList"]) => {
    if (card.status === true) {
      return;
    }

    if (id > -1) {
      if (card.id === id) {
        classList.remove("opacity-0");

        let newCards = cards;
        newCards.splice(
          cards.findIndex((e) => e.id === card.id),
          1,
          { ...card, status: true }
        );
        newCards.splice(
          cards.findIndex((e) => e.id === id && e.status !== true),
          1,
          { ...card, status: true }
        );

        setId(-1);
        setclassList(null);
        setCards(newCards);

        return;
      }

      if (card.id !== id) {
        classList.remove("opacity-0");

        setTimeout(() => {
          classList.add("opacity-0");
          beforeClassList?.add("opacity-0");
        }, 1000);

        setId(-1);
        setclassList(null);

        return;
      }
    }

    classList.remove("opacity-0");
    setId(card.id);
    setclassList(classList);
  };

  return (
    <div className="max-w-screen min-h-creen">
      <div className="bg-zinc-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-black grid grid-flow-col grid-cols-4 grid-rows-2 gap-8">
          {cards.map((card, index) => {
            return <Card card={card} selectCard={selectCard} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
