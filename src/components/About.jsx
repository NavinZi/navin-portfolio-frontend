import { useState, useEffect } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FcOk } from "react-icons/fc";
import { FaQuestionCircle } from "react-icons/fa";
import Axios from "axios";

export default function About(props) {
  const [show, setShow] = useState(false);
  const {toggleTheme} = props;
  const [submitList, setSubmitList] = useState([]);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState(null);
  const [comment, setComment] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  function addSubmit(e) {
    e.preventDefault();
    setShowConfirmationModal(false);
      Axios.post("http://localhost:8888/addSubmit", {
      name: name,
      company: companyName,
      email: email,
      salary: salary,
      comment: comment,
    })
      .then(() => {
        setShowSuccessModal(true)
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
        setShowErrorModal(true)
      });
  }

  function handleCloseModal(){
    setShowSuccessModal(false);
    setShowErrorModal(false);
    setName("");
    setCompanyName("");
    setEmail("");
    setSalary(null);
    setComment("");
    const formElement = document.getElementById('form-submit')
    formElement.reset();
  };

  useEffect(() => {
    document.title = "Navin - About";
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
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <section className="max-w-[70%] mx-auto px-10 lg:grid grid-cols-2 flex flex-col gap-y-10 gap-x-5 mt-10 md:mt-20">
        {/* <img
          src={NoCat}
          className="border-white border-[1px] object-cover rounded-full md:w-[600px] md:h-[600px] w-[300px] h-[300px] mx-auto"
        /> */}
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            GET IN TOUCH
          </h1>
          <p className="mt-2 sm:mt-6 p-1 text-lg sm:text-xl">
            If you are interested in me, Please contact me as information below.
          </p>
          <div className="mt-2 sm:mt-6 flex item-center flex-col gap-8 p-2">
            <span className="flex">
              <IoMail className="text-2xl" />
              <p className="ml-5">navinsbp@gmail.com</p>
            </span>
            <span className="flex">
              <FaPhoneAlt className="text-2xl" />
              <p className="ml-5">+66 xx xxx xxxx</p>
            </span>
            <span className="flex">
              <FaLine className="text-2xl" />
              <p className="ml-5">xxxxxx</p>
            </span>
          </div>
        </div>
        <form id="form-submit" className="about-form flex flex-col gap-6 max-w-[600px]"
          onSubmit={(e)=>{
            e.preventDefault();
            setShowConfirmationModal(true);
          }}
        >
          <div className="flex flex-col gap-4">
            <p className="font-bold">Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className={`px-4 py-3 rounded-md border-[#1c1c22] border-[1px] ${toggleTheme}`}
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Company's name</p>
            <input
              type="text"
              placeholder="Enter your company's name"
              className={`px-4 py-3 rounded-md border-[#1c1c22] border-[1px] ${toggleTheme}`}
              required
              onChange={(e) => setCompanyName(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">E-mail</p>
            <input
              type="text"
              placeholder="Enter your e-mail"
              className={`px-4 py-3 rounded-md border-[#1c1c22] border-[1px] ${toggleTheme}`}
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Salary (per-month)</p>
            <input
              type="number"
              placeholder="Enter your salary (THB)"
              className={`px-4 py-3 rounded-md border-[#1c1c22] border-[1px] ${toggleTheme}`}
              required
              onChange={(e) => setSalary(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Comment</p>
            <textarea
              rows="3"
              placeholder="Enter your comment"
              className={`px-4 py-3 rounded-md border-[#1c1c22] border-[1px] ${toggleTheme}`}
              required
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-[150px] mx-auto mt-4 bg-gradient-to-r from-purple-600 to-orange-500 p-2 rounded-full hover:brightness-125"
          >
            submit
          </button>
        </form>
      </section>

      {showConfirmationModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-xl shadow-md w-96">
              <FaQuestionCircle className="mx-auto text-[150px] mb-4 fill-[#82ce34]"/>
              <p className="mb-6 text-black text-center text-xl font-bold">Are you sure you want to submit?</p>
              <div className="flex justify-center gap-[80px]">
                <button
                  onClick={() => setShowConfirmationModal(false)}
                  className="bg-gray-300 hover:bg-gray-200 text-gray-700 font-bold w-[100px] py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={addSubmit}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-[100px] py-2 rounded-md"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {showSuccessModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-md w-96 text-black text-center">
            <FcOk className="text-[150px] absolute inset-0 m-auto bottom-[270px]"/>
              <p className="text-xl mb-6 mt-14">Your form has been submitted successfully!</p>
              <p className="text-md">Thank you for your information.</p>
              <button
                onClick={handleCloseModal}
                className="bg-[#82ce34] hover:bg-[#9be055] text-white font-bold w-[100%] py-2 rounded-md mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showErrorModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-md w-80 text-black">
              <h2 className="text-xl mb-4">Form Submitted</h2>
              <p>Submit failed.</p>
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}
        
    </div>
  );
}
