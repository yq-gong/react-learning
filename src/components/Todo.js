//  without capitalised T it will not work!
export default function Todo(props) {
  function deleteHandler() {
    alert(`Clicked ${props.text}`);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>{props.content}</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
