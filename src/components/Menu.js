import React, { useEffect, useState } from "react";
import ToppingsSelector from "./ToppingsSelector";
import Cart from "./Cart";

const Menu = () => {
  const [cartModal, setCartModal] = useState(false);
  const [pizzaModal, setPizzaModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedCrust, setSelectedCrust] = useState("normalne");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [toppingsTotal, setToppingsTotal] = useState(0);
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((response) => response.json())
      .then((data) => setPizzas(data.pizzas)) // Access the "pizzas" property
      .catch((error) => console.error(error));
  }, []);

  const handleAddToCart = () => {
    if (selectedPizza) {
      const pizzaToAdd = {
        ...selectedPizza,
        crust: selectedCrust,
        toppings: selectedToppings,
        price: selectedPizza.price,
        toppingsTotal: toppingsTotal,
      };
      setCart((prevCart) => [...prevCart, pizzaToAdd]);
      setPizzaModal(false);
      setSelectedPizza(null);
      setSelectedCrust("normalne");
      setSelectedToppings([]);
      setToppingsTotal(0);
    }
  };

  const handleCrustChange = (event) => {
    setSelectedCrust(event.target.value);
  };

  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
    setPizzaModal(true);
  };

  const handleCloseModal = () => {
    setPizzaModal(false);
    setSelectedPizza(null);
    setSelectedCrust("normalne");
    setSelectedToppings([]);
    setToppingsTotal(0);
  };

  const handleShowCartModal = () => {
    setCartModal(true);
  };

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="pizzas">
        <div className="pizza-grid">
          {Array.isArray(pizzas) ? (
            pizzas.map((pizza) => (
              <div key={pizza.id} className="pizza">
                <img src={pizza.img} alt="pizza"></img>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <p>{`${pizza.price.toFixed(2)}zł`}</p>
                <button onClick={() => handlePizzaClick(pizza)}>Dodaj</button>
              </div>
            ))
          ) : (
            <p>Loading pizzas...</p>
          )}
        </div>
      </div>
      {pizzaModal && (
        <div className="modal__menu">
          <div className="modal-content">
            <h2>{selectedPizza.name}</h2>
            <p>{selectedPizza.description}</p>
            <p>{`${selectedPizza.price.toFixed(2)}zł`}</p>
            <label htmlFor="crust">Wybierz ciasto:</label>
            <select
              id="crust"
              value={selectedCrust}
              onChange={handleCrustChange}
            >
              <option value="normalne">normalne</option>
              <option value="cienkie">cienkie</option>
              <option value="grube">grube</option>
            </select>
            <label>
              Dodaj składniki:
              <ToppingsSelector
                toppingsTotal={toppingsTotal}
                setToppingsTotal={setToppingsTotal}
                toppings={selectedPizza.toppings}
              />
            </label>
            <button onClick={handleAddToCart}>Dodaj do koszyka</button>
            <button onClick={handleCloseModal}>Zamknij</button>
          </div>
        </div>
      )}
      <Cart
        toppingsTotal={toppingsTotal}
        cartModal={cartModal}
        handleShowCartModal={handleShowCartModal}
        cart={cart}
        onClose={() => setCart([])}
        onOrder={() => console.log("Zamówienie złożone!")}
        setCartModal={setCartModal}
      />
    </div>
  );
};

export default Menu;
