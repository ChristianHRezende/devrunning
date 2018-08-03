import React from "react";

const Distance = ({ distance, metric }) => {
  const distanceStr =
    metric === "metric"
      ? `${distance.toFixed(2)}km`
      : `${(distance * 0.621371).toFixed(2)}mi`;

  return <span>{distanceStr}</span>;
};

export default Distance;
  