import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import ProfileComplete from "./components/ProfileComplete/ProfileComplete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfileComplete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
