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
// ----------Menampilkan props secara dinamis menggunakan map()---------------
// function Menu() {
//   const foods = data;
//   const numFoods = foods.length;
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       {numFoods > 0 ? (
//         <ul className="foods">
//           {data.map((coffee) => (
//             <Coffee coffeeObj={coffee} key={coffee.nama} />
//           ))}
//         </ul>
//       ) : (
//         <p>Warung sedang tutup</p>
//       )}

/* Membungkus root elemen lebih dari satu dengan menggunakan React.fragment atau <> */

function Menu() {
  const foods = data;
  const numFoods = foods.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <React.Fragment>
        {numFoods > 0 ? (
          <ul className="foods">
            {data.map((coffee) => (
              <Coffee coffeeObj={coffee} key={coffee.nama} />
            ))}
          </ul>
        ) : (
          <p>Warung sedang tutup</p>
        )}
      </React.Fragment>

      {/* --------Cara Menggunakan Props */}

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

// --------------------DESTRUCTING PROPS-------------------
// function Coffee(props) {
//   return (
//     <li className="food">
//       <h3>{props.coffeeObj.nama}</h3>
//       <p>{props.coffeeObj.harga}</p>
//       <img src={props.coffeeObj.foto} alt="" width={500} height={500} />
//     </li>
//   );
// }

// CARA 1
function Coffee(props) {
  const { nama, harga, foto, stok } = props.coffeeObj;
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <h3>{nama}</h3>
      <span>{stok ? harga : "Habis"}</span>
      <img src={foto} alt="" width={500} height={500} />
    </li>
  );
}

// CARA 2
// function OpenHour(jamTutup,jamBuka) {
//   return (
//     <footer className="footer">
//       <div className="order">
//         <p>
//           Copyright {new Date().getFullYear()} Adamar Coffee | Buka
//           {jamBuka}- Tutup {jamTutup}
//         </p>
//       </div>
//     </footer>
//   );
// }

// ----------------------------------------------------------------------------

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 12;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  // CARA PENGKONDISIAN ADA 3 CARA

  //---------------- CARA 1 (TERNARY IF)---------------------
  // return (
  //   <footer className="footer">
  //     {isOpen ? (
  //       <div className="order">
  //         <p>
  //           Copyright {new Date().getFullYear()} Adamar Coffee | Buka {jamBuka}{" "}
  //           - Tutup {jamTutup}
  //         </p>
  //       </div>
  //     ) : (
  //       <p>Warung sedang tutup</p>
  //     )}
  //   </footer>
  // );

  //--------------CARA 2 (IF BIASA)-------------------
  // if (isOpen) {
  //   return (
  //     <footer className="footer">
  //       <div className="order">
  //         <p>
  //           Copyright {new Date().getFullYear()} Adamar Coffee | Buka {jamBuka}-
  //           Tutup {jamTutup}
  //         </p>
  //       </div>
  //     </footer>
  //   );
  // } else {
  //   return <p>Toko sedang tutup</p>;
  // }

  // --------CARA 3 (REFACTOR COMPONENT)--------------------

  if (isOpen) {
    return <OpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <CloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

function OpenHour(props) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          Copyright {new Date().getFullYear()} Adamar Coffee | Buka
          {props.jamBuka}- Tutup {props.jamTutup}
        </p>
      </div>
    </footer>
  );
}

function CloseHour(props) {
  return (
    <footer className="footer">
      <p>Toko Sedang Tutup</p>
    </footer>
  );
}

// ------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
