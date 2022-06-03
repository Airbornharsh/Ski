import { React, useState } from "react";
import SearchComponents from "./assests/JavaScript/SearchComponents/SearchComponents";
import Render from "./assests/JavaScript/Render/Render";

function App() {
  const [Data, setData] = useState("");

  const onSearched = (data) => {
    let finalData = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== " ") {
        finalData += data[i];
      }
    }
    if (finalData) {
      finalData = finalData.toLowerCase();
    }
    setData(finalData.trim());
  };

  return (
    <div className="App">
      <SearchComponents onSearched={onSearched} />
      <Render searched={Data} />
    </div>
  );
}

export default App;
