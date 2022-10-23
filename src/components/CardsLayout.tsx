import card from "../services/Card";
import useSelect from "../hooks/selectCard";

import Card from "./Card";

interface Props {
  Cards: card[];
  setCards: Function;
  setScreen: Function;
}

export default function CardsLayout({ Cards, setCards, setScreen }: Props) {
  const { selectCard } = useSelect(Cards, setCards, setScreen);

  console.log(Cards);

  return (
    <div className="text-black flex gap-8 w-6/12 flex-wrap justify-center">
      {Cards.map((card, index) => (
        <Card key={index} card={card} selectCard={selectCard} />
      ))}
    </div>
  );
}
