import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios";
import car from "../static/images/Car.png";

export const Control = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axiosInstance
        .get(``)
        .then((res) => {
          setData(res.data);
          console.log(data);
        })
        .catch((err) => console.log(err.message));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full h-screen">
      <div className="w-full right-0 text-right px-8 font-medium text-xl">
        <Link to="help/">
          <p className="hover:underline hover:text-purpLight decoration-purpLight">
            Help
          </p>
        </Link>
      </div>
      <div className="w-full text-center">
        <h1 className="font-audiowide text-8xl text-purpLight">RC-44</h1>
        <h2 className=" font-extrabold text-3xl">Controller</h2>
      </div>
      <div className="flex w-10/12 h-2/3 mx-auto mt-14 justify-around">
        <div className="flex justify-center items-center w-1/4 ">
          <div className="grid grid-cols-1 gap-y-7">
            <div className="bg-dark text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
              Object Distance: 82cm
            </div>
            <button>
              <p className="text-4xl font-semibold text-white font-4xl bg-purpLight inline-block w-full py-4 rounded-2xl">
                Full
              </p>
            </button>
            <input
              type="range"
              min="0"
              max="15"
              defaultValue="0"
              step="1"
              className="h-44 w-2 mx-auto"
              style={{ webkitAppearance: "slider-vertical" }}
            />
            <button>
              <p className="text-4xl font-semibold text-white font-4xl bg-purpLight inline-block w-full py-4 rounded-2xl">
                Stop
              </p>
            </button>
            <div className="bg-dark text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
              Current Draw: 150mA
            </div>
          </div>
        </div>
        <div className="w-1/2 grid place-items-center">
          <img src={car} alt="Car" />
          <div className="bg-dark text-white text-center px-2 py-1 rounded-xl text-xl font-semibold -mt-40">
            Battery Voltage: 7.00V
          </div>
        </div>
        <div className="flex justify-center items-center w-1/4">
          <div className="grid grid-cols-1 gap-y-7">
            <div className="bg-dark text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
              Object Distance: 82cm
            </div>
            <button>
              <p className="text-4xl font-semibold text-white font-4xl bg-purpLight inline-block w-full py-4 rounded-2xl">
                Full
              </p>
            </button>
            <input
              type="range"
              min="0"
              max="15"
              defaultValue="0"
              step="1"
              className="h-44 w-2 mx-auto"
              style={{ webkitAppearance: "slider-vertical" }}
            />
            <button>
              <p className="text-4xl font-semibold text-white font-4xl bg-purpLight inline-block w-full py-4 rounded-2xl">
                Stop
              </p>
            </button>
            <div className="bg-dark text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
              Current Draw: 150mA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
