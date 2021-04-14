import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function Itens() {
  return (
    <div className="container itens">
      <div className="item">
        <img src={icon1} />
        <h3 className="item-title">Decorative</h3>
        <p className="item-description">
          React makes it painless to create interactive UIs.
        </p>
      </div>
      <div className="item">
        <img src={icon2} />
        <h3 className="item-title">Components</h3>
        <p className="item-description">
          Build encapsulated components that manage their state.
        </p>
      </div>
      <div className="item">
        <img src={icon3} />
        <h3 className="item-title">Single-Way</h3>
        <p className="item-description">
          A set of immutable values are passed to the component's
        </p>
      </div>
      <div className="item">
        <img src={icon4} />
        <h3 className="item-title">JSX</h3>
        <p className="item-description">
          Statically-typed, designed to run on modern browsers.
        </p>
      </div>
    </div>
  );
}

export default Itens;
