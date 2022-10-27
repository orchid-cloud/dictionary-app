import "./App.css";
import Dictionary from "./Dictionary";
import Header from "./Header";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <div className="footer__text">Coded by NZ</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
