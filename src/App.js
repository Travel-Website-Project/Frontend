import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";


function App() {
  
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} >
        </Route>
      </Routes>
  </AnimatePresence>
  );
}

export default App;
