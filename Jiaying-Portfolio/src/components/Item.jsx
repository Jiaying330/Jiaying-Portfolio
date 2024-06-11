import React from "react";
import "./Item.scss";

export default function Item({ data }) {
  console.log(data);
  const { title, subTitle, time, descriptions } = data;

  return (
    <div className="resume__item">
      <div className="resume__item-left">
        <p className="resume__time">{time}</p>
      </div>
      <div className="resume__item-right">
        <h4 className="resume__item-title">{title}</h4>
        <h5 className="resume__item-subtitle">{subTitle}</h5>
        <ul className="resume__item-description resume__item-description-list">
          {descriptions.map((item) => {
            return <li className="resume__item-description-item">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
