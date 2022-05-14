import "./App.css";
import Command from "./components/Command";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Client from "./components/Client";
import SearchCommandByClient from "./components/SearchCommandByClient";

function App() {
  return (
    <>
      <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/command" element={<Command />} />
        <Route
          path="/searchCommandsByClient"
          element={<SearchCommandByClient />}
        />
      </Routes>
      </div>
    </>
  );
}

export default App;
