//  without capitalised T it will not work!

import React from "react";
import { useState } from "react";

function deleteHandler(p) {
  alert(`Clicked ${p.text}`);
}

export default function Todo(props) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // Update the count state by incrementing it by 1
    setCount(count + 1);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>{props.content}</span>
        {/* <button className="btn" onClick={deleteHandler(this.props)}>
            Delete
          </button> */}
        <button className="btn" onClick={handleClick}>
          Clicked {count}times
        </button>
        <p>Adding a small change to test update.</p>
      </div>
    </div>
  );
}
