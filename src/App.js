import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FirstScreen from "./components/Screens/firstScreen";
import SecondScreen from "./components/Screens/secondScreen";
import "./global.css";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<FirstScreen />} />
        <Route path="/first" element={<FirstScreen />} />
        <Route path="/second" element={<SecondScreen/>} />
      </Routes>
    </Router>
  
  );
};

export default App;
