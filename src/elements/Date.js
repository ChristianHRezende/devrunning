import React from "react";
import moment from "moment-timezone";

const DateStr = ({ date, timezone }) => {
  const zeroDate = moment.tz(date, "GMT");
  const inTimezone = zeroDate.clone().tz(timezone);
  const format = inTimezone.format("DD/MM/YYYY H:mm:ss");

  return <span>{format}</span>;
};

export default DateStr;
