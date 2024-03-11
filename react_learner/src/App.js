import "./App.css";
import FunctionComponent from "./components/functioncomponent";
import { ClassComp, ClassComp2 } from "./components/classcomponent";
import { Clicked } from "./components/click";
import { CountHover } from "./components/countonhover";

function App() {
  return (
    <div>
      <h1>WELCOME TO LEARNING REACT</h1>
      <p>this is learning react getting the certificate</p>
      <FunctionComponent></FunctionComponent>
      <ClassComp></ClassComp>
      <ClassComp2></ClassComp2>
      <Clicked></Clicked>
      <CountHover></CountHover>
    </div>
  );
}

export default App;
