import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("Martin");
  const [age, setAge] = useState(0);
  const [lastName, setLastName] = useState("San José");

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const tick = () => {
    setAge(age + 1);
    setDate(new Date());
  };

  return (
    <div>
      <h2>Actual hour: {date.toLocaleTimeString}</h2>
      <h3>
        {name} {lastName}
      </h3>
      <h1>{age}</h1>
    </div>
  );
};

export default Clock;
