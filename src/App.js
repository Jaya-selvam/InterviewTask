import "./App.css";
import UsecaseOne from "../src/UseCase1";
import UseCaseTwo from "../src/UseCase2";

function App() {
  return (
    <div className="App">
      <UsecaseOne />
      <div className="Space">
        <UseCaseTwo />
      </div>
    </div>
  );
}

export default App;
