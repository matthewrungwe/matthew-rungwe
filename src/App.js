import './App.css';

// Components
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      
      <main>
        <Main />
      </main>

    </div>
  );
}

export default App;
