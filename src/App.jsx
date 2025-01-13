import React, { createContext } from "react";
import { MainComponent } from "./components/MainComponent.jsx";
const DataContext = createContext();

const user = "Adam Smith";
const city = "San Francisco";

function App() {
  return (
    <DataContext.Provider value={{ user, city }}>
      <main>
        <h1> React Context</h1>
        <MainComponent />
      </main>
    </DataContext.Provider>
  );
}

export { DataContext };
export default App;
