import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start"
import Vote from "./pages/Vote"
import Result from "./pages/Result"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/resultado" element={<Result />} />
        <Route exact path="/vote" element={<Vote />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
