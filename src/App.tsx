import "./App.css";
import { Home, pages } from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Recoveries } from "./pages/Recoveries/Recoveries";
import { Projects } from "./pages/Projects/Project";
import { NavBar } from "./components/NavBar/NavBar";
import { Header } from "./components/Header/Header";
import React from "react";

function App() {
  const [isLeftDrawerOpen, setLeftDrawerOpen] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          links={pages}
          isopen={isLeftDrawerOpen}
          setIsopen={() => {
            setLeftDrawerOpen(!isLeftDrawerOpen);
          }}
        />
        {/* <NavBar links={pages} /> */}

        <Routes>
          <Route
            path="*"
            element={<Home isLeftDrawerOpen={isLeftDrawerOpen} />}
          />
          <Route
            path="/project"
            element={<Projects isLeftDrawerOpen={isLeftDrawerOpen} />}
          />
          <Route
            path="/recoveries"
            element={<Recoveries isLeftDrawerOpen={isLeftDrawerOpen} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
