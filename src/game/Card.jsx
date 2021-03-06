import React from "react";

import "./Card.css";

export default function Card({
  currentItem,
  uncovered,
  onSelectProperty,
  selectedProperty,
  properties,
  playersTurn = false,
}) {
  function selectPropertyHandler(prop) {
    if (playersTurn) {
      onSelectProperty(prop);
    }
  }

  const front = (
    <div className="card">
      <h1 className="card-heading">
        {currentItem.name ? currentItem.name : "Unbekannt"}
      </h1>
      {
        <img
          alt={currentItem.name}
          src={`${process.env.PUBLIC_URL}/placeholder.png`}
          height="200"
          width="200"
          className="card-img"
        />
      }
      <table>
        <tbody className="t-body">
          {Object.keys(properties).map((property) => {
            const itemProperty = properties[property];
            return (
              <tr
                key={property}
                className={selectedProperty === property ? "active" : ""}
                onClick={() => selectPropertyHandler(property)}
              >
                <td className="table-label">{itemProperty.label}</td>
                <td className="table-value">
                  {currentItem[property]}&nbsp;{itemProperty.unit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  const back = <div className="card back" />;

  return <div>{uncovered ? front : back}</div>;
}
