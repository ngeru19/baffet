import './App.css';
import Header from './components/01_header/Header';
import Main from './components/02_main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mobile-bg"></div>
      <div className='container'>
        <Main />
      </div> 
    </div>
  );
}

export default App;
