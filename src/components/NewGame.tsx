import React from "react";
import Button from "./Button";

export default function NewGame() {
  return (
    <div>
      <h2>New Game</h2>
      <label>
        Name: <input id="userName" name="userName" placeholder="User name" />
      </label>
      <label>
        Game ID: <input id="gameId" name="gameId" placeholder="User name" />
      </label>
      <Button value="Join" onClickHandler={() => console.log("join")} />
      <Button value="Create" onClickHandler={() => console.log("Create")} />
    </div>
  );
}
