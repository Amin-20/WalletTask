import React, { useState, useEffect } from "react";
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
    position: "absolute",
    marginTop: "60px",
    marginLeft: "-200px",
    width: "195px",
    height: "30px",
    fontSize: "18px",
  };

  const [wallets, setWallets] = useState(cards);
  const [newCardName, setNewCardName] = useState("");
  const [newValyute, setNewValyute] = useState("");

  function handleObject() {
    setWallets([
      ...wallets,
      {
        id: wallets.length + 1,
        name: newCardName,
        currency: newValyute,
        incomes: [],
        expenses: [],
      },
    ]);
  }

  function cardName(e) {
    e.preventDefault();
    setNewCardName(e.target.value);
  }

  function handleValyute(e) {
    e.preventDefault();
    setNewValyute(e.target.value);
  }

  return (
    <div style={mainStyle}>
      <div>
        <img
          style={{ width: "50%" }}
          src="https://cdn.trend.az/2022/10/18/unibank_logo_181022.jpg"
          alt="UniBank Logo"
        ></img>
      </div>

      <select
        style={{
          width: "200px",
          height: "40px",
          paddingLeft: "10px",
          fontSize: "18px",
          marginTop: "10px",
        }}
      >
        {wallets.map((w, index) => (
          <option key={index}>{w.name}</option>
        ))}
      </select>

      <input style={inputStyle} onChange={cardName}></input>

      <select
        style={{
          width: "200px",
          height: "40px",
          paddingLeft: "10px",
          marginLeft: "50px",
          fontSize: "18px",
        }}
        onChange={handleValyute}
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
          marginLeft: "-420px",
          width: "150px",
          height: "50px",
          fontSize: "18px",
        }}
        onClick={handleObject}
      >
        Add New Wallet
      </button>
    </div>
  );
}
