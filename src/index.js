function Greet() {
  const greeting = "Hello, React!";

  return <h1>{greeting}</h1>;
}

const domContainer = document.querySelector(".react");
ReactDOM.render(
  <div>
    <Greet />
  </div>,
  domContainer
);
