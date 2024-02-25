import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LeftComponent from "./components/LeftComponent/LeftComponent";
import RightComponent from "./components/RightComponent/RightComponent";
function App() {
  return (
    <Router>
      <div className="main-container">
        <LeftComponent />
        <RightComponent />
      </div>
    </Router>
  );
}

export default App;
