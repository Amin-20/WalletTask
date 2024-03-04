import React, { useState } from "react";
import { cards } from "./data";

export default function Start() {
  const mainStyle = {
    border: "3px solid #ff6400",
    position: "absolute",
    marginTop: "30px",
    marginLeft: "20px",
    width: "30%",
    height: "50vh",
    borderRadius: "10px",
  };

  const buttonStyle = {
    border: "2px solid #ff6400",
    position: "absolute",
    marginTop: "110px",
    marginLeft: "-200px",
    width: "150px",
    height: "50px",
    fontSize: "18px",
  };

  const inputStyle = {
    
  };

  const [wallets, setWallets] = useState(cards);

  return (
    <div style={mainStyle}>
      <div>
        <img
          style={{ width: "50%" }}
          src="https://cdn.trend.az/2022/10/18/unibank_logo_181022.jpg"
        ></img>
      </div>

      <select
        style={{
          width: "200px",
          height: "40px",
          paddingLeft: "10px",
          fontSize: "18px",
        }}
      >
        {wallets.map((w) => (
          <option>{w.name}</option>
        ))}
      </select>

      <input style={inputStyle}></input>

      <select
        style={{
          width: "200px",
          height: "40px",
          paddingLeft: "10px",
          marginLeft: "50px",
          fontSize: "18px",
        }}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="try">TRY</option>
      </select>

      <button style={buttonStyle}>Show Wallet</button>
      <button
        style={{
          border: "2px solid #ff6400",
          position: "absolute",
          marginTop: "110px",
          marginLeft: "-400px",
          width: "150px",
          height: "50px",
          fontSize: "18px",
        }}
      >
        Add New Wallet
      </button>
    </div>
  );
}
