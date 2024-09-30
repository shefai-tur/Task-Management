import React from "react";
import Home from "./Pages/Home";
import AllTask from "./Pages/AllTask"
import ComplateTask from "./Pages/ComplateTask"
import ImportentTask from "./Pages/ImportentTask"
import IncomplateTask from "./Pages/IncomplateTask"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
const App = () => {
  return (
    <div className=" bg-gray-900 text-white h-screen p-2 relative ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}> 
          <Route index  element={<AllTask/>}/>
          <Route path="/complatetask"  element={  <ComplateTask/>}/>
          <Route path="/importenttask"  element={  <ImportentTask/>}/>
          <Route path="/incomplatetask"  element={  <IncomplateTask/>}/>
          </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>

    </div>
  );
};

export default App;
