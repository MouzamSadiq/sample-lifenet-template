import "./App.css";
import Home from "./pages/Home/Home";
import KonvaGround from "./pages/Home/Konva/Konva";
import { TabularForm } from "./pages/Home/TabularForm/TabularForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tab-3" element={<TabularForm />} />
        </Routes>
        {/* <Home /> */}
      </BrowserRouter>

      {/* <TabularForm /> */}
    </div>
  );
}

export default App;
