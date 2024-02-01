import logo from './logo.svg';
import './App.css';

import { create } from './zustand-my'

const useCount = create((set) => ({
  count: 0,
  plusCount: () => set((state) => ({ count: state.count + 1, }))
}))

function App() {

  const count = useCount(state => state.count)

  const plusCount = useCount(state => state.plusCount)
  console.log("🚀 ~ App ~ count:", count)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={() => plusCount()}>plus</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
