import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
<<<<<<< HEAD
import Loading from "react-loading";
=======
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f

function PageCarousel({
  children: pages,
  handleNextChapter,
  handlePreviousChapter,
  handleExit,
<<<<<<< HEAD
  loading,
  setLoading,
=======
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
}) {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  // Adjusted for RTL: 'Next' goes to the previous slide in LTR
  const navigate = (direction) => {
<<<<<<< HEAD
    //setLoading(true);
=======
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
    if (direction == 1 && current == pages.length - 1) {
      handleNextChapter();
    } else if (direction == -1 && current == 0) {
      handleExit();
    } else {
      setCurrent(
        (current) => (current + direction + pages.length) % pages.length
      );
    }
  };

<<<<<<< HEAD
  const handlePageChange = () => {
    try {
      let pageNumber = parseInt(prompt("Enter page number:"));
      if (pageNumber <= pages.length && pageNumber > 0) {
        setCurrent(pageNumber - 1);
      } else {
        throw new Error("Number out of bounds");
      }
    } catch (error) {
      alert(
        `Input out of bounds!\nplease enter a number within the ${pages.length} page range.`
      );
      console.error(error);
    }
  };

=======
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
  function handleNextButton() {
    handleNextChapter();
  }
  function handlePrevButton() {
    handlePreviousChapter();
  }

<<<<<<< HEAD
  return (
    <>
      <div className="">
        <div className="relative h-full">
          {/* Display only the current page */}
          <div className=" justify-center items-center">
            {loading && (
              <div className="fixed inset-0 flex justify-center items-center h-screen transition-opacity duration-500">
                <Loading
                  type="spin"
                  height={"10%"}
                  width={"10%"}
                  color="#deb018"
                />
              </div>
            )}
            <div className="" style={{ width: "100%", height: "100%" }}>
              <div className="overflow-hidden">
                <div
                  className="flex  flex-row-reverse transition-transform ease-out duration-500"
                  style={{
                    transform: `translateX(${current * 100}%)`,
                  }}
                >
                  {pages}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute inset-0 flex flex-row justify-center items-center">
              <button
                onClick={() => navigate(1)} // Navigate to the next slide
                className="opacity-0 active:opacity-10 bg-gray-700 w-full h-full flex justify-center items-center"
              />

              <button
                onClick={() => navigate(-1)} // Navigate to the previous slide
                className="opacity-0 active:opacity-10 bg-gray-700 w-full h-full flex justify-center items-center"
              />
            </div>
          </div>
        </div>

        {/* Page number */}
        <div
          className="rounded-lg justify-self-center items-center p-2 mt-8 text-2xl font-black text-gray-100 hover:bg-gray-700 hover:text-gray-100 active:bg-gray-900"
          onClick={handlePageChange}
        >
          {current + 1} of {pages.length}
        </div>

        {/* Pagination indicators (dots) */}
        <div className="flex flex-row justify-center items-center mx-8 m-y-4">
          {pages.map((dot, i) => (
            <div
              key={i}
              className={`transition-all w-8 h-4 border-2 border-gray-900 ${
                current === i ? "bg-sky-700" : "bg-sky-400"
              } ${i === pages.length - 1 ? "rounded-r-full" : ""} ${
                i === 0 ? "rounded-l-full" : ""
=======
  const Next = () =>
    setCurrent((current) => (current === 0 ? pages.length - 1 : current - 1));

  // Adjusted for RTL: 'Prev' goes to the next slide in LTR
  const Prev = () =>
    setCurrent((current) => (current === pages.length - 1 ? 0 : current + 1));

  return (
    <>
      <div className="flex flex-col">
        <div className="relative h-screen mb-28 mt-14" >
          {/* Display only the current page */}
          <div className="flex justify-center items-center">
            {pages[current]}
          </div>

          {/* Navigation buttons */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={() => navigate(1)} // Navigate to the next slide
              className="opacity-0 active:opacity-10 rounded-lg p-4 w-screen h-screen flex justify-center items-center text-2xl font-black bg-gray-700 text-white hover:bg-gray-500 hover:text-white active:bg-gray-300"
            >
              &laquo;
            </button>

            <button
              onClick={() => navigate(-1)} // Navigate to the previous slide
              className="opacity-0 active:opacity-10 rounded-lg p-4 w-screen h-screen flex justify-center items-center text-2xl font-black bg-gray-700 text-white hover:bg-gray-500 hover:text-white active:bg-gray-300"
            >
              &raquo;
            </button>
          </div>
        </div>

        {/* Pagination indicators (dots) */}
        <div className="flex flex-row-reverse justify-center items-center m-28">
          {pages.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 mx-1 rounded-full ${
                current === i ? "bg-gray-700" : "bg-gray-400"
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
              }`}
            />
          ))}
        </div>
<<<<<<< HEAD
        <div className="flex flex-row-reverse justify-between mt-6">
          <button
            onClick={handlePrevButton}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Previous Chapter
          </button>
          <button
            onClick={handleNextButton}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
=======
        <div className="flex flex-row-reverse justify-center items-center gap-x-16 m-10 w-1/3">
          <button
            onClick={handlePrevButton}
            className="rounded-lg p-4 w-1/2 flex justify-center items-center text-2xl font-black bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200"
          >
            Prev Chapter
          </button>
          <button
            onClick={handleNextButton}
            className="rounded-lg p-4 w-1/2 flex justify-center items-center text-2xl font-black bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200"
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
          >
            Next Chapter
          </button>
        </div>
      </div>
    </>
  );
}

export default PageCarousel;
