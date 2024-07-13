import React, { useState } from "react";

function Buttton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button Clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Buttton;
