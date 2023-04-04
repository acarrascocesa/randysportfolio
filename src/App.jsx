import { useContext } from "react";

import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

// Import Router.
import { BrowserRouter } from "react-router-dom";

// Import Motion.
import { motion } from "framer-motion";

import { CursorContext } from "./context/CursorContext";

function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimRoutes />
      </BrowserRouter>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </>
  );
}

export default App;
