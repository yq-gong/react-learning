import Todo from "./Todo";
import React from "react";
import "../App.css"

function HomePage() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Host this website" content="ddl: 2days" />
      <Todo text="Write more content here" content="ddl: 5days" />
    </div>
  );
}
export default HomePage
