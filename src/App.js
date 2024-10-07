import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./counter";
import Fetching from "./fetching";
import Interval from "./interval";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/products" element={<Fetching />} />
        <Route path="/interval" element={<Interval />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
