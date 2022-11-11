import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { tokenNames } from "../constants/blockchain";

function HomePage() {
  const [coin1, setCoin1] = useState("0x");
  const [coin2, setCoin2] = useState("0x");

  const randomize = () => {
    const temp1 = tokenNames[Math.floor(Math.random() * tokenNames.length)];
    const temp2 = tokenNames.filter((token) => token !== coin1)[
      Math.floor(Math.random() * tokenNames.length)
    ];
    setCoin1(temp1);
    setCoin2(temp2);
  };

  return (
    <div>
      <h1>Higher Or Lower With Uniblock</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Coin 1</h2>
        <text>{coin1}</text>
        <h2>vs.</h2>
        <h2>Coin 2</h2>
        <text>{coin2}</text>
        <image></image>
      </div>
      <div style={{ display: "flex", paddingBottom: 10, paddingTop: 50 }}>
        <button>Higher</button>
        <div style={{ padding: 5 }}></div>
        <button>Lower</button>
      </div>
      <div style={{ paddingBottom: 10 }}>
        <text>Score: 0</text>
      </div>
      <button
        onClick={() => {
          randomize();
        }}
      >
        Start Game
      </button>
    </div>
  );
}

export default HomePage;
