import { useState } from "react";
import "./styles.css";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {/* html code for star icon */}
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
