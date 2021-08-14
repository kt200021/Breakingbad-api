import React from "react";
import DisplayCharacter from "./DisplayCharacter.js";
import { useState } from "react";

const CharacterItem = ({ item, setDisplay, setCharacter }) => {
  const content = (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
          <br />
          <h1>{item.name}</h1>
          <br />
          <button
            class="btn"
            onClick={() => {
              setCharacter(item);
              setDisplay(true);
            }}
          >
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );

  return content;
};

export default CharacterItem;
