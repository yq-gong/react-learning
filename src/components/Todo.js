//  without capitalised T it will not work!
export default function Todo(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
          <span>{props.content}</span>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}
