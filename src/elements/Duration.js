import React from "react";

const Duration = props => {
  const { duration } = props;
  const pad = num => num.toString().padStart(2, "0");

  const hour = Math.floor(duration / 360);
  const minute = Math.floor((duration - hour * 360) / 60);
  const seconds = duration - hour * 360 - minute * 60;

  const durationStr =
    hour > 0
      ? pad(hour) + ":" + pad(minute) + ":" + pad(seconds)
      : pad(minute) + ":" + pad(seconds);

  return <span>{durationStr}</span>;
};

export default Duration;
