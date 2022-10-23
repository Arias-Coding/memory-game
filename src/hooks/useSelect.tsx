import { useState } from "react";

import card from "../services/card";

interface beforeClassList {
  action: Function | null;
}

export default function useSelect(
  cards: card[],
  setCards: Function,
  setScreen: Function
) {
  const [id, setId] = useState<number>(-1);
  const [beforeClassList, setclassList] = useState<beforeClassList>({
    action: null,
  });

  const selectCard = (card: card, setOpacity: Function) => {
    console.log("Funciona");
    if (card.status === true) {
      console.log("Funciona x 2");

      return;
    }

    setOpacity();

    if (id > -1) {
      if (card.id === id) {
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
        setclassList({ action: null });
        setCards(newCards);

        if (cards.every((e) => e.status === true) === true) {
          setScreen(true);
        }

        return;
      }

      if (card.id !== id) {
        setTimeout(() => {
          setOpacity();
          beforeClassList.action?.();
        }, 600);

        setId(-1);
        setclassList({ action: null });

        return;
      }
    }

    setId(card.id);
    setclassList({ action: setOpacity });
  };

  return { selectCard };
}
