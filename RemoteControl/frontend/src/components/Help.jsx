import React from "react";
import { Link } from "react-router-dom";

export const Help = () => {
  return (
    <div className="bg-offWhite">
      <div className="w-full px-8 font-medium text-xl absolute">
        <Link to="/">
          <p className="hover:underline hover:text-purpLight decoration-purpLight">
            Back
          </p>
        </Link>
      </div>
      <div className="w-full h-screen grid place-items-center">
        <div className="grid grid-cols-1 gap-y-2 w-3/5">
          <h2 className="font-semibold text-xl -mb-2">Car Control</h2>
          <div className="bg-purpLight text-white text-justify px-4 py-4 rounded-xl">
            Control the left and right wheels with the control bars on the left
            and right side respectively. The “Full” button pushes the car to max
            speed and the “Stop” button brings the wheel speed down to 0. Move
            the slide bar up to incrementally increase the speed and bring it
            down to incrementally decrease the speed.
          </div>
          <h2 className="font-semibold text-xl -mb-2">Sensor Data</h2>
          <div className="bg-purpLight text-white text-justify px-4 py-4 rounded-xl">
            <ul className="ml-4 list-disc text-left">
              <li>
                Object Detection of each wheel is displayed above the control
                bars on each side of the car.
              </li>
              <li>
                The current draw of each wheel is shown below the control bars
                on each side of the car.
              </li>
              <li>
                The battery voltage is displayed right below the battery on the
                car.
              </li>
              <li>
                You will see that these sensors change colour intuitively at
                different values.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
