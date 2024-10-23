import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Img from "../utils/img/bg-img.png";
import { BsSearch } from "react-icons/bs";
export default function Main() {
  const navigate = useNavigate();
  const scrollToCategory = (categoryName) => {
    const categoryElement = document.getElementById(categoryName);

    if (categoryElement) {
      window.scrollTo({
        top: categoryElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const categoryName = searchTerm.toLowerCase();
    scrollToCategory(categoryName);
  };
  return (
    <div className=" flex items-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-32 sm:px-8 px-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center"
        >
          {/* Ruk earphones change karto he pan dead jahle
           */}
          <div className=" lg:my-28 my-20 w-full">
            <div className="flex items-center justify-center font-bold sm:my-20 text-xl mb-10 lg:text-4xl">
              <p className="sm:flex sm:items-center sm:justify-center sm:mt-10 md:mt-5 mt-10">
                Discover, Explore, Connect, Thrive
              </p>
            </div>

            <p className="sm:flex items-center justify-start">Docker Nginx</p>
            <div className="flex item-center justify-center my-10">
              <div className="rounded-3xl border-4 border-black flex items-center justify-center bg-white w-2/3 ">
                <form
                  action=""
                  className="border-none flex justify-between w-full px-5"
                  onsubmit={(event) => handleSubmit(event)}
                >
                  <input
                    type="text"
                    placeholder="ex. yoga"
                    name="search-bar"
                    className="border-none outline-none focus:ring-0 w-4/5"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  ></input>
                  <button type="submit">
                    <BsSearch />
                  </button>
                </form>
              </div>
            </div>

            <div className="flex items-center justify-center my-10">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  navigate("/collection");
                }}
              >
                View Collection
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="img"
        >
          <img src={Img} alt="logo-img"></img>
        </motion.div>
      </div>
    </div>
  );
}
