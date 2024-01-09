import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Adamar Coffee</h1>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="foods">
        {data.map((coffee) => (
          <Coffee coffeeObj={coffee} key={coffee.nama} />
        ))}
      </ul>
      {/* <Coffee nama="Americano" harga="IDR 15k" foto="coffee/americano.jpg" />

      <Coffee nama="Capuchino" harga="IDR 15k" foto="coffee/capuchino.jpg" />

      <Coffee
        nama="Coffee latte"
        harga="IDR 15k"
        foto="coffee/coffee latte.jpg"
      />

      <Coffee
        nama="Matcha latte"
        harga="IDR 15k"
        foto="coffee/matcha latte.jpg"
      /> */}
    </main>
  );
}

function Coffee(props) {
  console.log(props);
  return (
    <li className="food">
      <h3>{props.coffeeObj.nama}</h3>
      <p>{props.coffeeObj.harga}</p>
      <img src={props.coffeeObj.foto} alt="" width={500} height={500} />
    </li>
  );
}

function Footer() {
  const date = new Date().getFullYear();
  const day = new Date().getDay();

  return (
    <footer>
      {" "}
      Copyright {date} {day} Adamar Coffee
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
