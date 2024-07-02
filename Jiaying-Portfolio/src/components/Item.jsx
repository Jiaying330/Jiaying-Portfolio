import React from "react";
import "./Item.scss";

export default function Item({ data }) {
  // console.log(data);
  const { title, subTitle, time, descriptions } = data;

  return (
    <div className="item">
      <div className="item__left">
        <p className="item__time">{time}</p>
      </div>
      <div className="item__right">
        <h4 className="item__title">{title}</h4>
        <h5 className="item__subtitle">{subTitle}</h5>
        <ul className="item__descriptions">
          {descriptions.map((item) => {
            return <li className="item__descriptions-item">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
