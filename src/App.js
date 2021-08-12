import React, { useState } from "react";
import Axios from "axios";

export default function App() {
  const [data, SetData] = useState("");

  const fetchData = async (e) => {
    //
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1>Home page</h1>
      <div>
        <input
          type="text"
          placeholder="search . . ."
          value={data}
          // onChange={e.target.value}
        ></input>
      </div>
    </div>
  );
}
