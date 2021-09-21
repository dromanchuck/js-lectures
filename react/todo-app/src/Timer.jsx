import React from "react";

import { Button } from "./components/Button";

function formatTimeNumber(timeNumber) {
  return timeNumber < 10
    ? `0${timeNumber}`
    : timeNumber;
}

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  start = () => {
    clearInterval(this.timer);

    this.timer = setInterval(() =>
      this.setState((state) => {
        const newSeconds = state.seconds + 1;

        if (newSeconds === 60) {
          const newMinutes = state.minutes + 1;

          if (newMinutes === 60) {
            return {
              ...state,
              hours: ++state.hours,
              minutes: 0,
              seconds: 0,
            };
          }

          return {
            ...state,
            minutes: ++state.minutes,
            seconds: 0,
          };
        }

        return {
          ...state,
          seconds: ++state.seconds,
        };
      })
    );
  };

  render() {
    const { hours, minutes, seconds } =
      this.state;

    return (
      <div>
        <p
          style={{
            fontSize: 100,
          }}
        >
          {formatTimeNumber(hours)}:
          {formatTimeNumber(minutes)}:
          {formatTimeNumber(seconds)}
        </p>
        <Button
          text={"Start"}
          type={"primary"}
          onClick={this.start}
        />
        <Button
          text={"Stop"}
          type={"secondary"}
          onClick={() => alert("Secondary")}
        />
        <Button
          text={"Reset"}
          type={"text"}
          onClick={() => alert("Text")}
        />
      </div>
    );
  }
}
