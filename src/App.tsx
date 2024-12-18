import { Route, Routes } from "react-router";
import Home from "./screens/Home";
import ScoreScreen from "./screens/ScoreScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scorescreen" element={<ScoreScreen />} />
    </Routes>
  );
}

export default App;
