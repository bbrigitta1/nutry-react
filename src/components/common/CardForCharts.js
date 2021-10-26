import React, { } from "react";


const cardForSimpleBar = {
    background: "white",
    borderRadius: "15px 15px 15px 15px",
    width: "500px",
    height: "350px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "-5px -5px 10px rgb(165, 161, 161)",
  };

  const cardHeading = {
    //fontSize: "bold",
  }

function CardForCharts({children, cardData}) {
  return (
    <div style={cardForSimpleBar}>
      <div>
        <h2 style={cardHeading}>{cardData.label.toUpperCase()}</h2>
      </div>  
      {children}
    </div>
  );
}

export default CardForCharts;
