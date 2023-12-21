import { ImFacebook } from "react-icons/im";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mx-5 md:mx-10 mt-[150px] border-t-[0.75px] border-gray-500">
      <div className="flex justify-between p-5">
        <div>
          <h1 className="text-xl sm:text-2xl tracking-tighter">PORTFOLIO</h1>
          <p className="text-xs sm:text-base mt-10">© Designed By Navin Chamgun</p>
        </div>
        <div className="flex justify-between items-end sm:gap-8 gap-3 text-4xl">
          <Link
            to="https://www.linkedin.com/in/navin-chamgun-872b2720b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedin className="rounded-full p-2 border-[1px] border-white-primary" />
          </Link>
          <Link
            to="https://www.facebook.com/NavinZi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook className="rounded-full p-2 border-[1px] border-white-primary" />
          </Link>
          <Link to="#">
            <FaInstagram className="rounded-full p-2 border-[1px] border-white-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
