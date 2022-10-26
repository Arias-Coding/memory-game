import { useState } from "react";

import card from "../services/card";

export default function useSelect(
  cards: card[],
  setCards: Function,
  setScreen: Function
) {
  const [id, setId] = useState<number>(-1);
  const [beforeClassList, setclassList] = useState<{ action: Function }>({
    action: () => {
      return;
    },
  });

  const selectCard = (card: card, setOpacity: Function) => {
    if (card.status === true) {
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
        setCards(newCards);

        setId(-1);
        setclassList({ action: () => {} });

        if (cards.every((e) => e.status === true) === true) {
          setScreen("");
        }

        return;
      }

      if (card.id !== id) {
        setTimeout(() => {
          setOpacity();
          beforeClassList.action();
        }, 600);
        setId(-1);
        setclassList({ action: () => {} });

        return;
      }
    }

    setId(card.id);
    setclassList({ action: setOpacity });
  };

  return { selectCard };
}
