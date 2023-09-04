import { useState } from "react";
import Login from "./components/navbar/Login";
import "./App.css";
import Footer from "./components/footer/Footer";
import DisplayData from "./components/DisplayData";

function App() {
  const myValue = "hello";
  const data = [
    { name: "Renata", age: 20, tel: 9078213, address: "something" },
    { name: "Mamoon", age: 20, tel: 9078213, address: "something" },
  ];

  return (
    <>
      <h1>JS + React Recap</h1>
      {/* <Login myValue={myValue} />
      <Footer myValue={myValue} /> */}
      {data.map((user) => (
        <>
          <DisplayData user={user} />
        </>
      ))}
    </>
  );
}

export default App;
