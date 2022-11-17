import './App.css';
import {Routes,Route} from "react-router-dom"
import Addstep from "./pages/Addstep/Addstep";
import Render from "./pages/reder/render";
import Home from "./pages/index"
function App() {
  return (
    <div className={"App"}>
      <Routes>
          <Route path={"/"} element={<Home/>} >
              <Route index element={<Addstep/>} />
              <Route path={"/render"} exact element={<Render/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
