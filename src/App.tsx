import "./App.css";
import { TopBar } from "./components/TopBar";
import { DashBoard } from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";
import KonvaGround from "./pages/Home/Konva/Konva";
import { TabularForm } from "./pages/Home/TabularForm/TabularForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadOrCapturePhoto from "./pages/Home/TabularForm/components/Photo-upload";
import PdfTemplate from "./pages/Home/new_template/pdfTemplate";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tab-3" element={<TabularForm />} />
          <Route path="/pic" element={<UploadOrCapturePhoto />} />
          <Route path="/pdf-template" element={<PdfTemplate />} />
        </Routes>
        {/* <Home /> */}
      </BrowserRouter>
      {/* <TabularForm /> */}
    </div>
  );
}

export default App;
