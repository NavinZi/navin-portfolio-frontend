import { useState, useEffect } from "react";
import works from "../data/works";
import skills from "../data/skills";
import Marine from "../assets/Marine.png"
import Mitsui from "../assets/Mitsui.png"
import NSC from "../assets/NSC.png"
import EGAT from "../assets/EGAT.png"

export default function Experience() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "Navin - Experience";
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
      <section className="lg:grid grid-cols-2 gap-12 lg:gap-[100px] flex flex-wrap justify-center lg:justify-between items-start mt-10 md:mt-20">
        <div className="experience-container">
          <h1 className="text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            WORK EXPERIENCE
          </h1>
          <div className="experience-list">
            {works
              .filter((data) => data.type === 2)
              .map((item) => {
                return <div key={item.id} className="p-1 pb-6 my-6 border-b-[1px] border-gray-500">
                  <h1 className="text-lg sm:text-2xl font-bold mb-2">{item.name}</h1>
                  <div className="flex justify-between text-zinc-400 text-sm sm:text-base">
                    <p>{item.desc}</p>
                    <p className="whitespace-nowrap">{item.year}</p>
                  </div>
                </div>;
              })}
          </div>
        </div>
        <div className="education-container">
          <h1 className="text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            EDUCATION
          </h1>
          <div className="education-list">
            {works
              .filter((data) => data.type === 1)
              .map((item) => {
                return <div key={item.id} className="p-1 pb-4 my-5 border-b-[1px] border-gray-500">
                  <h1 className="text-lg sm:text-2xl font-bold mb-2">{item.name}</h1>
                  <div className="flex justify-between text-zinc-400 text-sm sm:text-base">
                    <p>{item.desc}</p>
                    <p className="whitespace-nowrap">{item.year}</p>
                  </div>
                </div>;
              })}
          </div>
        </div>
      </section>

      {/* what I do */}
      <section className="mt-[100px]">
        <h1 className="text-4xl font-bold text-center">What I Do</h1>
        <div className="mt-10 md:grid grid-flow-col flex flex-wrap justify-center gap-10 font-bold">
          {skills.map((item) =>{
            return(
              <div key={item.id} className="skill-container bg-black-secondary w-[100px] h-[100px] rounded-sm flex flex-col items-center justify-center gap-[9px]">
                <span className="text-4xl" style={{color: item.color}}>{item.icon}</span>
                <p className="">{item.name}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Companies */}
      <section className="mt-[100px]">
        <h1 className="text-4xl font-bold text-center">Companies I've Worked With</h1>
        <div className="mt-12 md:grid grid-flow-col flex flex-wrap justify-center gap-10 font-bold">
          <div className="flex flex-wrap items-center justify-center gap-[100px]">
          <img src={Mitsui} className="bg-white-primary p-3 rounded-2xl h-auto w-[180px]"/>
          <img src={NSC} className="bg-white-primary p-3 rounded-full h-auto w-[180px]"/>
          <img src={Marine} className="bg-white-primary p-3 rounded-full h-auto w-[180px]"/>
          <img src={EGAT} className="bg-white-primary p-3 rounded-full h-auto w-[180px]"/>
          </div>
        </div>
      </section>
    </div>
  );
}
