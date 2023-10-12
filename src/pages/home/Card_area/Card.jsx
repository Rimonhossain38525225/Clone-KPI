/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { v4 as uuidv4 } from "uuid";

import { cardsData } from "../../../Data";
const Card = () => {
  console.log(cardsData);
  return (
    <>
      {cardsData.map((cards) => {
        const { card1, card2 } = cards;
        return (
          <div className="row" key={uuidv4()}>
            <div className="col-sm-6 cl_w">
              <div className="single_card">
                <h4>{card1.title}</h4>
                <img src={card1.img} alt="card images" />
                <ul>
                  {card1.links.map((link) => {
                    return (
                      <li key={uuidv4()}>
                        <i className="fas fa-circle-check"></i>
                        <a href="#">{link}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 cl_w">
              <div className="single_card">
                <h4>{card2.title}</h4>
                <img src={card2.img} alt="card images" />
                <ul>
                  {card2.links.map((link) => {
                    return (
                      <li key={uuidv4()}>
                        <i className="fas fa-circle-check"></i>
                        <a href="#">{link}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
