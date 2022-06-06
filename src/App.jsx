import Home from "./pages/Home";
import Casos from "./pages/Casos";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="casos" element={<Casos />} />
      </Routes>
    </>
  );
}

export default App;
