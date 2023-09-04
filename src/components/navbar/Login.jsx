import Child from "../Child";
import "./navbar.css";

export default function Login({ myValue }) {
  console.log(myValue);

  return (
    <>
      <Child />
      <h1>LOGIN</h1>
    </>
  );
}
