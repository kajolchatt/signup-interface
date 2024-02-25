import logo from "./logo.svg";
import "./App.css";
import LeftComponent from "./components/LeftComponent/LeftComponent";
import RightComponent from "./components/RightComponent/RightComponent";
function App() {
  return (
    <div className="main-container" >
      <LeftComponent />
      <RightComponent />
    </div>
  );
}

export default App;
