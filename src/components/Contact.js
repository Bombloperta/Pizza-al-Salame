import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Proszę wypełnić wszystkie pola formularza.");
      return;
    }
    if (!email.includes("@")) {
      alert("Proszę podać poprawny adres email.");
      return;
    }
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    // Logika API
  };

  return (
    <>
      <section className="contact">
        <h1>zapraszamy!</h1>
        <div className="contact__container">
          <div className="map__container">
            <p className="map__text">Tutaj jesteśmy!!!</p>
            <iframe
              className="map__img"
              title="alSalamoMap"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20039.84519145003!2d17.036426522558592!3d51.108817198724935!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1679341122104!5m2!1spl!2spl"
              width="400"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="form__container">
            <p className="form__text">Napisz do nas:</p>
            <form onSubmit={handleSubmit} className="form__contact">
              <div>
                <label htmlFor="name">Imię i nazwisko:</label>
                <input
                  className="cos"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Wiadomość:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Wyślij</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
