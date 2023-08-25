import "./App.css";
import { TopBar } from "./components/TopBar";
import { DashBoard } from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";
import KonvaGround from "./pages/Home/Konva/Konva";
import { TabularForm } from "./pages/Home/TabularForm/TabularForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadOrCapturePhoto from "./pages/Home/TabularForm/components/Photo-upload";
import PdfTemplate from "./pages/Home/new_template/pdfTemplate";
import LoadingScreen from "./pages/Loading/screen1/LoadingScreen";
import LoadingScreen2 from "./pages/Loading/screen2/LoadingScreen2";
import PdfTemplate2 from "./pages/Home/new_template/pdfTemplate2";
import PdfTemplate3 from "./pages/Home/new_template/pdfTemplate3";


function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<PdfTemplate />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tab-3" element={<TabularForm />} />
          <Route path="/pic" element={<UploadOrCapturePhoto />} />
          <Route path="/pdf-template" element={<PdfTemplate />} />
          <Route path="/pdf-template2" element={<PdfTemplate2 />} />
          <Route path="/pdf-template3" element={<PdfTemplate3 />} />

          <Route path="/skeleton-screen1" element={<LoadingScreen/>}/>
          <Route path="/skeleton-screen2" element={<LoadingScreen2/>}/>
        </Routes>
        {/* <Home /> */}
      </BrowserRouter>
      {/* <TabularForm /> */}
    </div>
  );
}

export default App;
