import './App.css';

// Components
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      
      <main className="main">
        <Main />
      </main>
    </div>
  );
}

export default App;
