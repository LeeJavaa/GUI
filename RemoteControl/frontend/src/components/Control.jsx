import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios";
import car from "../static/images/Car.png";

export const Control = () => {
  const [data, setData] = useState({
    leftDistance: 100,
    rightDistance: 100,
    leftCurrent: 150,
    rightCurrent: 150,
    batteryVoltage: 7.2,
  });

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       axiosInstance
  //         .get(``)
  //         .then((res) => {
  //           setData(res.data);
  //           console.log(data);
  //         })
  //         .catch((err) => console.log(err.message));
  //     }, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setSpeed = (speed, wheel) => {
    if (wheel === "right") {
      //   axiosInstance
      //     .get(`control/right/${speed}`)
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((err) => console.log(err.message));
      document.getElementById("rightRange").value = speed;
    } else {
      //   axiosInstance
      //     .get(`control/left/${speed}`)
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((err) => console.log(err.message));
      document.getElementById("leftRange").value = speed;
    }
  };

  return (
    <div className="w-full h-screen bg-offWhite">
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
            {data.leftDistance <= 20 && (
              <div className="bg-sensorDanger text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Object Distance: {data.leftDistance}cm
              </div>
            )}
            {data.leftDistance > 20 && data.leftDistance <= 70 && (
              <div className="bg-sensorWarning text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Object Distance: {data.leftDistance}cm
              </div>
            )}
            {data.leftDistance > 70 && data.leftDistance <= 99 && (
              <div className="bg-sensorOk text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Object Distance: {data.leftDistance}cm
              </div>
            )}
            {data.leftDistance === 100 && (
              <div className="bg-sensorOk text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Object Distance: Max
              </div>
            )}
            <button
              type="submit"
              className="bg-dark py-4 rounded-2xl hover:bg-purpLight"
              onClick={() => setSpeed(15, "left")}
            >
              <p className="text-4xl font-semibold text-white font-4xl">Full</p>
            </button>
            <input
              type="range"
              min="0"
              max="15"
              defaultValue="0"
              step="1"
              className="h-44 w-2 mx-auto"
              style={{ webkitAppearance: "slider-vertical" }}
              id="leftRange"
              onChange={(e) => setSpeed(e.target.value, "left")}
            />
            <button
              type="submit"
              className="bg-dark py-4 rounded-2xl hover:bg-purpLight"
              onClick={() => setSpeed(0, "left")}
            >
              <p className="text-4xl font-semibold text-white font-4xl">Stop</p>
            </button>
            {data.leftCurrent <= 200 && (
              <div className="bg-sensorOk text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Current Draw: {data.leftCurrent}mA
              </div>
            )}
            {data.leftCurrent > 200 && data.leftCurrent <= 500 && (
              <div className="bg-sensorWarning text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Current Draw: {data.leftCurrent}mA
              </div>
            )}
            {data.leftCurrent > 500 && (
              <div className="bg-sensorDanger text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Current Draw: {data.leftCurrent}mA
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2 grid place-items-center">
          <img src={car} alt="Car" />
          {data.batteryVoltage > 6.8 && (
            <div className="bg-sensorOk text-white text-center px-2 py-1 rounded-xl text-xl font-semibold -mt-40">
              Battery Voltage: {data.batteryVoltage}V
            </div>
          )}
          {data.batteryVoltage <= 6.8 && data.batteryVoltage > 6.2 && (
            <div className="bg-sensorWarning text-white text-center px-2 py-1 rounded-xl text-xl font-semibold -mt-40">
              Battery Voltage: {data.batteryVoltage}V
            </div>
          )}
          {data.batteryVoltage <= 6.2 && (
            <div className="bg-sensorDanger text-white text-center px-2 py-1 rounded-xl text-xl font-semibold -mt-40">
              Battery Voltage: {data.batteryVoltage}V
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-1/4">
          <div className="grid grid-cols-1 gap-y-7">
            {data.rightDistance <= 20 && (
              <div className="bg-sensorDanger text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Object Distance: {data.rightDistance}cm
              </div>
            )}
            {data.rightDistance > 20 && data.rightDistance <= 70 && (
              <div className="bg-sensorWarning text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Object Distance: {data.rightDistance}cm
              </div>
            )}
            {data.rightDistance > 70 && data.rightDistance <= 99 && (
              <div className="bg-sensorOk text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Object Distance: {data.rightDistance}cm
              </div>
            )}
            {data.rightDistance === 100 && (
              <div className="bg-sensorOk text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Object Distance: Max
              </div>
            )}
            <button
              type="submit"
              className="bg-dark py-4 rounded-2xl hover:bg-purpLight"
              onClick={() => setSpeed(15, "right")}
            >
              <p className="text-4xl font-semibold text-white font-4xl">Full</p>
            </button>
            <input
              type="range"
              min="0"
              max="15"
              defaultValue="0"
              step="1"
              className="h-44 w-2 mx-auto"
              style={{ webkitAppearance: "slider-vertical" }}
              id="rightRange"
              onChange={(e) => setSpeed(e.target.value, "right")}
            />
            <button
              type="submit"
              className="bg-dark py-4 rounded-2xl hover:bg-purpLight"
              onClick={() => setSpeed(0, "right")}
            >
              <p className="text-4xl font-semibold text-white font-4xl">Stop</p>
            </button>
            {data.rightCurrent <= 200 && (
              <div className="bg-sensorOk text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Current Draw: {data.rightCurrent}mA
              </div>
            )}
            {data.rightCurrent > 200 && data.rightCurrent <= 500 && (
              <div className="bg-sensorWarning text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Current Draw: {data.rightCurrent}mA
              </div>
            )}
            {data.rightCurrent > 500 && (
              <div className="bg-sensorDanger text-white text-center px-2 py-1 rounded-xl text-xl font-semibold">
                Current Draw: {data.rightCurrent}mA
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
