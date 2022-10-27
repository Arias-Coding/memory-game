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
  const [rows, setRows] = useState("grid-rows-2");

  useEffect(() => {
    if (cards.length === 6) {
      setRows("grid-rows-3 sm:grid-rows-2");
    }
    if (cards.length === 12) {
      setRows("grid-rows-6 sm:grid-rows-4 lg:grid-rows-3");
    }
    if (cards.length === 18) {
      setRows("flex flex-wrap justify-center sm:grid-rows-6 lg:grid-rows-3");
      // setRows("auto-rows-auto");
    }
  }, [cards]);

  return (
    <div className="min-h-screen py-12 flex items-center justify-center overflow-hidden">
      <div className={`gap-8 sm:grid sm:grid-flow-col ${rows}`}>
        {cards.map((card, index) => (
          <Card key={index} card={card} selectCard={selectCard} />
        ))}
      </div>
    </div>
  );
}
