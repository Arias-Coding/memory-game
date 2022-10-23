import { useState } from "react";

import card from "../services/Card";

interface Props {
  card: card;
  selectCard: Function;
}

export default function Card({ card, selectCard }: Props): JSX.Element {
  const [state, setState] = useState("opacity-0");
  const action = () => {
    selectCard(card, () => {
      state == "opacity-0" ? setState("opacity-100") : setState("opacity-0");
    });
  };

  return (
    <button
      className="bg-zinc-200 p-2 rounded-xl shadow-lg shadow-zinc-500/50 bg-cover bg-[url('https://imgs.search.brave.com/ETGMx8KNuniuGkp3Tozg08zuNtsOfA3LUdeeOedmwjA/rs:fit:479:359:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9ibGFjay1zZWFt/bGVzcy1wYXR0ZXJu/LWZhYnJpYy1wb2tl/ci10YWJsZS1taW5p/bWFsaXN0aWMtY2Fz/aW5vLXZlY3Rvci12/ZWN0b3ItaWQ2NTE3/ODA1OTg_az02Jm09/NjUxNzgwNTk4JnM9/MTcwNjY3YSZ3PTAm/aD1CSW9tOWlUdGN6/YXlSNTRHcDB0QmNq/MWl2M3hMQklIM3R0/VVBKaHpSQldNPQ')]"
      onClick={action}
    >
      <div
        className={`bg-zinc-800 px-10 py-20 border-solid border-2 border-white text-white rounded-xl transition transition-700 ${state}`}
      >
        {card.id}
      </div>
    </button>
  );
}
