import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import PlacePage from "./Pages/PlacePage";


function App() {
  
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} >
        </Route>
        <Route path="/login" element={<LoginPage />} >
        </Route>
        <Route path="/signup" element={<SignupPage />} >
        </Route>
        <Route exact path="/:placeName" element={<PlacePage />}>
        </Route>
      </Routes>
  </AnimatePresence>
  );
}

export default App;
