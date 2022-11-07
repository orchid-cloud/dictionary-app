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
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          <div className="footer__text">
            Open source code on{" "}
            <a
              href="https://github.com/orchid-cloud/dictionary-app.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
