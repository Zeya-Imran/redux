import { useEffect, useState } from "react";

const Interval = () => {
  //   const [currentTime, setCurrentTime] = useState(new Date());
  const [counter, SetCounter] = useState(0);
  const [stop, setStop] = useState(true);

  useEffect(() => {
    let intervalId;
    if (!stop) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(() => {
        SetCounter((prevState) => prevState + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  });

  return (
    <div className="main__counter__container">
      <p>The Current Time IST</p>

      <p> 0{counter}</p>
      <div className="inside__container">
        <button onClick={() => setStop(false)}>Stop</button>
        <button onClick={() => SetCounter(0)}>Reset</button>
        <button onClick={() => setStop(true)}>Start</button>
      </div>
    </div>
  );
};

export default Interval;
