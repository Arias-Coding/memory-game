import { useEffect, useState } from "react";

import card from "../services/card";
import useSelect from "../hooks/useSelect";

import Card from "./Card";

interface Props {
  cards: card[];
  setCards: Function;
  setScreen: Function;
}

export default function CardsLayout({ cards, setCards, setScreen }: Props) {
  const { selectCard } = useSelect(cards, setCards, setScreen);
  const [cols, setCols] = useState("");

  useEffect(() => {
    if (cards.length === 6) {
      setCols("grid-cols-2 sm:grid-cols-3");
    }
    if (cards.length === 12) {
      setCols("grid-cols-2 sm:grid-cols-3 md:grid-cols-4");
    }
    if (cards.length === 18) {
      setCols("grid-cols-2 sm:grid-cols-3 lg:grid-cols-6");
    }
  }, [cards]);

  return (
    <div className="min-h-screen py-12 flex items-center justify-center overflow-hidden">
      <div className={`gap-8 grid place-content-center ${cols}`}>
        {cards.map((card, index) => (
          <Card key={index} card={card} selectCard={selectCard} />
        ))}
      </div>
    </div>
  );
}
