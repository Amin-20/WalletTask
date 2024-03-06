import React from "react";

export default function Main({ currentCards }) {
  const mainStyle = {
    border: "3px solid #ff6400",
    position: "absolute",
    marginTop: "30px",
    marginLeft: "750px",
    width: "55%",
    height: "95vh",
    borderRadius: "10px",
    display: "flex",
  };

  const altDiv = {
    border: "3px solid #ff6400",
    width: "50%",
    height: "50%",
  };

  return (
    <div style={mainStyle}>
      <div
        style={{
          position: "absolute",
          height: "50px",
          width: "155px",
          border: "4px solid #ff6400",
          marginLeft: "42%",
          backgroundColor: "white",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            margin: "0",
            textAlign: "center",
          }}
        >
          {currentCards.name}
        </p>
      </div>
      <div style={altDiv}>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>Incomes</p>
        {
            currentCards.incomes.map((c)=>(
              <p style={{fontSize:"25px",textAlign:"left",marginLeft:"70px"}}>
                {c.name} : {c.money} {currentCards.currency}
              </p>
            ))
        }
        <div style={{position:"absolute",marginLeft:"60px",marginTop:"150px"}}>
           <input style={{ width: "160px",height: "30px",fontSize: "18px"}}></input> 
           <input style={{ width: "45px",height: "30px",fontSize: "18px"}}></input> 
           <button style={{width: "52px",height: "36px",fontSize: "18px"}}>ADD</button>
        </div>
       
      </div>
      <div style={altDiv}>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>Expenses</p>
        {
            currentCards.expenses.map((c)=>(
              <p style={{fontSize:"25px",textAlign:"left",marginLeft:"70px"}}>
                {c.name} : {c.money} {currentCards.currency}
              </p>
            ))
        }
      </div>
    </div>
  );
}
