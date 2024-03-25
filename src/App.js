import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import Details from "./Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine />

        <CurrentWeather />
        <Details />
      </header>
    </div>
  );
}

export default App;
