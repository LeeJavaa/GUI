import { Routes, Route } from "react-router-dom";

import { Control } from "./components/Control";
import { Help } from "./components/Help";

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route path="/" element={<Control />} />
        <Route path="/help/" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
