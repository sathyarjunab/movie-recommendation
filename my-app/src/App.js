import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/signUp";
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
