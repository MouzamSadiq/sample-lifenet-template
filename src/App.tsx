import "./App.css";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResearchForm from "./pages/ResearchForm/ResearchForm";
import { Recoveries } from "./pages/Recoveries/Recoveries";
import { Projects } from "./pages/Projects/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/recoveries" element={<Recoveries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
