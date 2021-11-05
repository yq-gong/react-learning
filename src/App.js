import logo from "./logo.svg";
import "./App.css";

// must return sth that can be rendered in the browser
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>My Todos</h1>
      <div className="card">
        <h2>Need to add a title here</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
