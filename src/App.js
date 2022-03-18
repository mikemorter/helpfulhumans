import "./App.css";
import { Route, Redirect, BrowserRouter, Routes } from "react-router-dom";
import ListView from "./components/listView";
import NavBar from "./components/navBar";
import DetailView from "./components/detailView";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/color" element={<DetailView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
