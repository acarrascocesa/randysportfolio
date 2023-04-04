import React, { useContext } from "react";
// import images
import home from "../img/home/home.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// cursor context
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-10 pb-14 lg:pt-0 lg:pb-96 lg:w-[80vh] z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 lg:text-4xl lg:mt-60 lg:ml-28">
              photographer <br />
            </h1>
            <p className="text-[26px] lg:text-[56px] font-primary mb-4 lg:mb-20 lg:mt-0 lg:ml-28">
              New Jersey, USA
            </p>
            <Link to={"/contact"} className="btn lg:mb-0 lg:ml-28">
              Contact me
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex justify-end max-h-fit lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={home}
                alt="home"
                className="lg:max-h-[120vh] lg:mr-[20vh] "
                
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
