import React from "react";
import Die from "./Die";

const dieClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const { textContent, id,  } = event.target as HTMLInputElement;
  event.preventDefault();
  console.log(`dieClick ${id}:${textContent}`);
  // console.log(`event: ${JSON.stringify(event)}`);
};
const DICE_NUM = 6;

const dice: dieDtoModel[] = [
  { id: 1, value: "1", locked: false },
  { id: 2, value: "2", locked: false },
  { id: 3, value: "3", locked: false },
  { id: 4, value: "4", locked: false },
  { id: 5, value: "5", locked: false },
  { id: 6, value: "6", locked: false },
];

export default function DiceSet() {
  return (
    <div>
      {dice.map((die) => (
        <Die key={die.id} value={die.value} alt={die.value} onClickHandler={dieClick} />
      ))}
    </div>
  );
}

interface dieDtoModel {
  value: string;
  id: number;
  locked: boolean;
}
