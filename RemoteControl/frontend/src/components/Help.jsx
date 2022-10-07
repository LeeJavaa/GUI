import React from "react";
import { Link } from "react-router-dom";

export const Help = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        Control the left and right wheels with the control bars on the left and
        right side respectively. The “Full” button pushes the car to max speed
        and the “Stop” button brings the wheel speed down to 0. Move the slide
        bar up to incrementally increase the speed and bring it down to
        incrementally decrease the speed.
      </div>
      <div>
        <li>
          <ul>
            Object Detection of each wheel is displayed above the control bars
            on each side of the car. The object detection sign changes colour as
            objects come closer to the car as a warning.
          </ul>
          <ul>
            The current draw of each wheel is shown below the control bars on
            each side of the car.
          </ul>
          <ul>
            The battery voltage is displayed right below the battery on the car.{" "}
          </ul>
        </li>
      </div>
    </div>
  );
};
