import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const date = new Date().toDateString();
  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>Current Date</h1>
      <h2>{date}</h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Hello {name}</h3>
    </div>
  );
}
export default App;
