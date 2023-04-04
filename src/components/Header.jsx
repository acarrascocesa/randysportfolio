// Import components
import MobileNav from "./MobileNav";

// Import Logo
import logo from "../img/header/logo.jpg";

// Import Link
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
          className="max-w-[200px]"
        >
          <img className="max-w-[60px] rounded-md" src={logo} alt="logo" />
        </Link>
        <h2 className="lg:mr-[600px] font-bold">Randy De Frias</h2>
       
        {/* Nav hidden, show on desktop mode */}
        <nav
          className="hidden lg:flex gap-x-12 font-semibold"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link
            className="text-[#696c6d] hover:text-primary transition"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition"
            to={"/portfolio"}
          >
            Portofolio
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition"
            to={"/contact"}
          >
            Contact
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
