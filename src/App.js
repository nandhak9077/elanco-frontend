import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Applications from "./components/Applications";
import Resources from "./components/Resources";
import Raw from "./components/Raw";
function App() {
  return (
    <>
      <div className="App">
        <Dashboard />
        <BrowserRouter>
          <Routes>
            <Route path="/raw" element={<Raw />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
