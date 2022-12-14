import { useState, useEffect } from "react";

import card from "../services/card";

export default function useStart() {
  const [cards, setCards] = useState<card[]>([]);
  const [level, setLevel] = useState(3);

  useEffect(() => {
    setCards([]);
    const newCards = [];

    for (let index = 0; index < level; index++) {
      const cardId = Math.trunc(Math.random() * 9999);

      newCards[index] = {
        id: cardId,
        icon: "opacity-0",
        status: false,
      };
    }

    let newNewCards: card[] = [];

    while (newNewCards.length < level * 2) {
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
  }, [level]);

  const Start = (level: number) => {
    setLevel(0);
    setTimeout(() => {
      setLevel(level);
    }, 200);
  };

  return { cards, Start, setCards };
}
