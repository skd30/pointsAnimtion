import logo from "./logo.svg";
import "./App.scss";
import NumericData from "./numericData.js";

function App() {
  let dynamicValue = 10; //no coming from api

  let noToBeAnimated = 11; //no coming from api

  return (
    <div className="container">
      <NumericData
        displayNumber={dynamicValue}
        noToBeAnimated={noToBeAnimated}
      />
    </div>
  );
}

export default App;
