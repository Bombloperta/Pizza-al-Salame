import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = ({
  cart,
  onClose,
  onOrder,
  handleShowCartModal,
  cartModal,
  toppingsTotal,
  setCartModal,
}) => {
  const handleOrder = () => {
    onOrder();
    onClose();
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("order-confirmation").innerHTML =
      "Zamówienie złożone";
  };

  const toppingsPrice = cart.reduce(
    (total, pizza) => total + pizza.toppingsTotal,
    0
  );
  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price + pizza.toppingsTotal,
    0
  );

  return (
    <>
      <button className="cart-icon" onClick={handleShowCartModal}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      <div className={`cart-modal ${cartModal ? "open" : ""}`}>
        <div className="cart-modal-content">
          <h2>Koszyk</h2>
          <table>
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Ciasto</th>
                <th>Składniki</th>
                <th>Cena pizzy</th>
                <th>Dodatki</th>
                <th>Razem</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((pizza) => (
                <tr key={pizza.id}>
                  <td>{pizza.name}</td>
                  <td>{pizza.crust}</td>
                  <td>{pizza.toppings}</td>
                  <td>{`${pizza.price.toFixed(2)}zł`}</td>
                  <td>{`${pizza.toppingsTotal}zł`}</td>
                  <td>{`${(pizza.price + pizza.toppingsTotal).toFixed(
                    2
                  )}zł`}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3">Suma:</td>
                <td>{`${totalPrice.toFixed(2)}zł`} </td>
                <td>{`${toppingsPrice.toFixed(2)}zł`} </td>
                <td>{`${(totalPrice + toppingsPrice).toFixed(2)}zł`} </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleOrder}>Złóż zamówienie</button>
          <button onClick={onClose}>Resetuj</button>
          <button
            className="cart-modal-close"
            onClick={() => setCartModal(false)}
          >
            Zamknij
          </button>
          <div className="order-confirmation" id="order-confirmation"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
