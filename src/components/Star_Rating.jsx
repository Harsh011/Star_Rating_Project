import React, { useState } from "react";

const Star_Rating = ({ starLength = 5 }) => {
  const [star, setStar] = useState(Array(starLength).fill(0));
  const [starValue, setStarValue] = useState(0);
  const [starHover, setStarHover] = useState(0);

  return (
    <div className="container">
      <h1>Star Rating</h1>
      {star.map((item, index) => {
        return (
          <span
            className={
              (starHover === 0 && index < starValue) || index < starHover
                ? "gold"
                : ""
            }
            key={index}
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setStarHover(index + 1)}
            onMouseLeave={() => setStarHover(0)}
          >
            &#9733;
          </span>
        );
      })}

      <h3>Star Rating : {starValue}</h3>
    </div>
  );
};

export default Star_Rating;
