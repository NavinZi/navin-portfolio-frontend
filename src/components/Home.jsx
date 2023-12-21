import { useState, useEffect } from "react";
import profilePic from "../assets/profilePic.jpg";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "Navin - Home";
    window.scrollTo({
      top: 0,
    });
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 ease-in ${
        show ? "opacity-100 mx-auto max-w-[90%]" : "opacity-0"
      }`}
    >
      <div className="container lg:grid flex flex-wrap justify-center flex-col-reverse grid-flow-col gap-10  mx-auto mt-10 md:mt-20">
        <div className="md:my-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight lg:leading-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600">
            Hello, I'm Navin,
          </h1>
          <h1 className="text-3xl lg:text-7xl font-extrabold leading-tight lg:leading-normal">
            System developer based in Thailand.
          </h1>
          <p className="mt-5 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime repellendus dolore, fuga pariatur qui voluptatem accusantium velit, aspernatur quae sed laboriosam totam explicabo est aliquid, at quibusdam perferendis libero.
          </p>
        <div className="flex justify-center gap-10 items-center mt-[60px]">
          <Link to="/about" className="bg-gradient-to-r from-purple-600 to-orange-500 py-2 px-5 md:py-4 md:px-8 rounded-full hover:brightness-125">GET IN TOUCH</Link>
          <Link to="/experience" className="border-[1px] border-white-primary bg-black-primary py-2 px-5 md:py-4 md:px-8 rounded-full hover:brightness-125">VIEW EXPERIENCE</Link>
        </div>
        </div>
        <div>
          <img
            src={profilePic}
            className="md:w-[700px] md:min-h-[550px] md:max-h-[630px] md:h-auto md:border-none md:rounded-lg rounded-full w-[300px] h-[300px] border-white border-[1px] object-cover mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
