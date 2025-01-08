import { MainComponent } from "./components/MainComponent.jsx";
const user = "Adam Smith";
const city = "San Francisco";

function App() {
  return (
    <main>
      <h1> React Context</h1>
      <MainComponent user={user} city={city} />
    </main>
  );
}

export default App;
