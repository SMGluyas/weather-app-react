import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>
          🌏
        </p>
        <Weather city="New York" />
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
