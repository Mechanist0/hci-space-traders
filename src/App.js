import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import NewGame from "./Components/pages/NewGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newgame" element={<NewGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
