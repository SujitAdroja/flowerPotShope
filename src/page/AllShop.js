import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import flowerPot from "../data";
function AllShop() {
  const { pot } = useGlobalContext();
  return (
    <>
      <section className="section section-shop">
        <p className="img-content">Shop</p>
      </section>
      <section className="items section  ">
        <div className="container grid grid--3--cols">
          {pot.map((item, index) => {
            const { name, price, img } = item;
            return (
              <div className="item" key={index}>
                <Link to={`/pot/${item.id}`} className="link-single">
                  <figure className="figure">
                    <img src={img} alt="jar " />
                  </figure>
                  <div>
                    <h2 className="item-heading">{name}</h2>
                    <p className="price">{price}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AllShop;
