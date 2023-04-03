import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function UserLogin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    // tutaj dodaj logikę logowania użytkownika, np. wysyłając dane na serwer i otrzymując zwrotną odpowiedź

    // po pomyślnym zalogowaniu:
    const user = {
      login,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLogin("");
  };

  const storedUser = localStorage.getItem("user");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const loggedInLogin = parsedUser ? parsedUser.login : null;

  return (
    <>
      <section className="userLogin">
        {!loggedInLogin ? (
          <FontAwesomeIcon
            className="faUser"
            icon={faUser}
            onClick={() => setModalIsOpen(true)}
          />
        ) : (
          <di>
            <p className="userName">{loggedInLogin}</p>
            <button className="btn__logout" onClick={handleLogout}>
              Wyloguj
            </button>
          </di>
        )}
        <Modal className="modal" isOpen={modalIsOpen}>
          <button onClick={() => setModalIsOpen(false)}>X</button>
          <form onSubmit={handleLogin}>
            <label>
              Login:
              <input
                type="login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
            </label>
            <label>
              Hasło:
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button type="submit">Zaloguj</button>
          </form>
        </Modal>
      </section>
    </>
  );
}

export default UserLogin;
