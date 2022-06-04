import { React, useState } from "react";
import SearchComponents from "./assests/JavaScript/SearchComponents/SearchComponents";
import Render from "./assests/JavaScript/Render/Render";
import Logo from "./assests/JavaScript/Logo/Logo";

function App() {
  const [Data, setData] = useState("");
  const [filterKey, setFilterKey] = useState("all");

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

  const onFiltering = (data) => {
    setFilterKey(data);
  };

  return (
    <div className="App">
      <Logo/>
      <SearchComponents onSearched={onSearched} onFiltering={onFiltering} />
      <Render searched={Data} filtered={filterKey} />
    </div>
  );
}

export default App;
