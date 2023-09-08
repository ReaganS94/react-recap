import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [signal, setSignal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({
    name: "Ehsan",
    tel: 673912679312,
  });

  useEffect(() => {
    setUser({ ...user, age: 25 });
  }, []);

  console.log(user);

  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/api/key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }`
    );
    const data = await res.json();
    setPosts(data); // QUEUE a re-render
  };

  useEffect(() => {
    if (signal) fetchData();
  }, [signal]);

  const myStyle = { padding: "15px", color: "green" };

  return (
    <>
      <h1>JS + React Recap</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </button>
      <br />
      <button onClick={() => setSignal(!signal)} style={myStyle}>
        {signal ? "Off" : "On"}
      </button>

      {signal
        ? posts.map((post) => (
            <div
              key={post.id}
              style={{
                padding: "4px",
                border: "1px solid black",
                margin: "3px",
              }}
            >
              <h3>{post.title}</h3>
            </div>
          ))
        : null}
    </>
  );
}

export default App;
