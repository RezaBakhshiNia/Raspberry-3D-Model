import moment from "moment-jalaali";
import { useEffect, useState } from "react";

const LivePersianDate = () => {
  const [currentDate, setCurrentDate] = useState(
    moment().format("jYYYY/jM/jD")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(moment().format("jYYYY/jM/jD"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{currentDate}</div>;
};

export default LivePersianDate;
