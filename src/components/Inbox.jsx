import { useEffect, useState } from "react";
import Axios from "axios";

export default function Inbox() {
  const [show, setShow] = useState(false);
  const [submitList, setSubmitList] = useState([]);

  async function getSubmit() {
    await Axios.get("http://localhost:8888/getSubmit")
      .then((response) => {
        setSubmitList(response.data);
        console.log(response.status)
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }

  useEffect(() => {
    getSubmit();
    document.title = "Navin - Inbox";
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
      <section className="max-w-[80%] mx-auto mt-10 md:mt-20">
        <h1 className="text-3xl font-bold tracking-wider">Inbox</h1>
        <div className="mt-5">
          {submitList.length > 0 ? (
            <div>
              {submitList.map((data) => {
                return (
                  <div key={data.id} className="mb-5">
                    <p>Name : {data.name}</p>
                    <p>Company's name : {data.com_name}</p>
                    <p>E-mail : {data.email}</p>
                    <p>Salary : {data.salary} THB</p>
                    <p>Comment : {data.comment}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No inbox</p>
          )}
        </div>
      </section>
    </div>
  );
}
