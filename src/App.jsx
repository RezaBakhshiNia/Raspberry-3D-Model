import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/LoginPage";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
