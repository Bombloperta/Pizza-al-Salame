import React, { useEffect, useState } from "react";

const ToppingsSelector = ({ toppingsTotal, setToppingsTotal }) => {
  const [toppings, setToppings] = useState([]);
  const [toppingCounts, setToppingCounts] = useState({});

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Bombloperta/pizza-al-salame/api/toppings"
    )
      .then((response) => response.json())
      .then((data) => {
        // Dodajemy ceny składników
        const updatedData = data.map((topping) => ({
          ...topping,
          price: parseFloat(topping.price),
        }));
        setToppings(updatedData);

        // Ustawiamy początkową wartość licznika na zero dla każdego składnika
        const counts = {};
        updatedData.forEach((topping) => {
          counts[topping.id] = 0;
        });
        setToppingCounts(counts);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Obliczamy sumę cen składników
    let total = 0;
    toppings.forEach((topping) => {
      total += toppingCounts[topping.id] * topping.price;
    });
    setToppingsTotal(total);
  }, [toppings, toppingCounts, setToppingsTotal]);

  const handleMinusClick = (event, toppingId) => {
    event.preventDefault();
    if (toppingCounts[toppingId] === 0) {
      return; // blokowanie odejmowania składników od wartości 0
    }
    setToppingCounts((prevToppingCounts) => ({
      ...prevToppingCounts,
      [toppingId]: prevToppingCounts[toppingId] - 1,
    }));
  };

  const handlePlusClick = (event, toppingId) => {
    event.preventDefault();
    setToppingCounts((prevToppingCounts) => ({
      ...prevToppingCounts,
      [toppingId]: prevToppingCounts[toppingId] + 1,
    }));
  };

  return (
    <div className="toppings">
      {toppings.map((topping) => (
        <div key={topping.id} className="topping">
          <span>{topping.name}</span>
          <button
            className="btnT"
            onClick={(event) => handlePlusClick(event, topping.id)}
          >
            +
          </button>
          <span>{toppingCounts[topping.id]}</span>

          <button
            className="btnT"
            onClick={(event) => handleMinusClick(event, topping.id)}
          >
            -
          </button>
        </div>
      ))}
      <p className="toppings__total">Cena składników: {toppingsTotal}zł</p>
    </div>
  );
};

export default ToppingsSelector;
