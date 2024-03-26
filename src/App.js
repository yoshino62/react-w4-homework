import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import Details from "./Details";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine />
        <CurrentWeather />
        <Details />
        <Footer />
      </header>
    </div>
  );
}

export default App;
