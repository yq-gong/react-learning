import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

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
      <Todo text="Host this website" content="ddl: 2days"/>
      <Todo text="Write more content here" content="ddl: 5days"/>
    </div>
  );
}

export default App;
