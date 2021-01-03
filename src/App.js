import PoweredByReact from './PoweredByReact'
import Terminal from './Terminal'
import './App.css'

function App(){
  return (
    <div className="App">
      <header>
        <PoweredByReact />
      </header>
      <main>
        <Terminal />
      </main>
    </div>
  );
}

export default App