import axios from "axios";
import Image from "next/image";

function HomePage() {
  return (
    <div>
      <h1>Higher Or Lower With Uniblock</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>NFT 1</h2>
        <h2>vs.</h2>
        <h2>NFT 2</h2>
        <image></image>
      </div>
      <div style={{ display: "flex", paddingBottom: 10 }}>
        <button>Higher</button>
        <div style={{ padding: 5 }}></div>
        <button>Lower</button>
      </div>
      <div style={{ paddingBottom: 10 }}>
        <text>Score: 0</text>
      </div>
      <button>Start Game</button>
    </div>
  );
}

export default HomePage;
