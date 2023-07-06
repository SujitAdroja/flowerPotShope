import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaPlus, FaMinus } from "react-icons/fa";
import flowerPot from "../data";
function SingleElement() {
  const { id } = useParams();
  const { incrementAmount, decrementAmount } = useGlobalContext();
  const { pot, addToCart } = useGlobalContext();
  const {
    img,
    description,
    name,
    material,
    price,
    measurement,
    amount,
    total,
  } = pot.find((item) => item.id === +id);
  console.log(amount, total);
  return (
    <section className="section section-single container">
      <div className="grid grid--2--cols">
        <img src={`/${img}`} alt={name} />
        <div className="single-description">
          <h2 className="secondary-heading m-b">{name}</h2>
          <p className="price m-b">{price}</p>
          <div className="single-amount m-b">
            <button className="inc-dec-btn" onClick={() => decrementAmount(id)}>
              <FaMinus />
            </button>
            <div>{amount}</div>
            <button className="inc-dec-btn" onClick={() => incrementAmount(id)}>
              <FaPlus />
            </button>
          </div>
          <button className="btn m-b" onClick={addToCart}>
            Add to bag
          </button>
          <p className="description m-small-b">{description}</p>
          <p className="single-material m-small-b">{material}</p>

          <p className="single-measurement">Measurements:{measurement}</p>
        </div>
      </div>
    </section>
  );
}

export default SingleElement;
