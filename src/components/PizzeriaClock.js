import React, { useState, useEffect } from "react";

const PizzeriaClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [todayOpeningHours, setTodayOpeningHours] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const openingHours = [
    { day: 0, open: "11:00", close: "23:00" },
    { day: 1, open: "12:00", close: "20:00" },
    { day: 2, open: "12:00", close: "19:00" },
    { day: 3, open: "12:00", close: "22:00" },
    { day: 4, open: "11:00", close: "22:00" },
    { day: 5, open: "11:00", close: "23:00" },
    { day: 6, open: "11:00", close: "23:00" },
  ];

  useEffect(() => {
    const todayOpeningHours = openingHours.find(
      (hours) => hours.day === currentTime.getDay()
    );
    setTodayOpeningHours(todayOpeningHours);
  }, [currentTime]);

  const todayOpeningTime = new Date(
    `${currentTime.toDateString()} ${todayOpeningHours?.open}`
  );
  const todayClosingTime = new Date(
    `${currentTime.toDateString()} ${todayOpeningHours?.close}`
  );

  const isBetween = (time, start, end) => {
    return time >= start && time <= end;
  };

  const isPizzeriaOpen =
    isBetween(currentTime, todayOpeningTime, todayClosingTime) &&
    todayOpeningHours !== undefined;

  useEffect(() => {
    setIsOpen(isPizzeriaOpen);
  }, [isPizzeriaOpen]);

  return (
    <>
      <div className={"clock"}>
        <i className="fa-sharp fa-regular fa-clock clock__img"></i>
        <div className={"clock__text"}>
          <h2>{isOpen ? "Dziś otwarte:" : "Dziś już zamknięte:"}</h2>
          {todayOpeningHours ? (
            <p>
              {todayOpeningHours.open} - {todayOpeningHours.close}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default PizzeriaClock;
