import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ToDo from "./component/todo/ToDo";
import Login from "./component/login/Login";

function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
