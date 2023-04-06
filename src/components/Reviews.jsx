import React, { useEffect, useState } from "react";
import { SMALL_BREAKPOINT } from "../utils/breakpoints";
import reviews from "../utils/review";

export default function Reviews() {
  const [activeTip, setActiveTip] = useState(1);
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  // used to display circular buttons on small screens.
  const emptyCtrls = Array(reviews.length).fill(null);

  // media query used on to display ctrl btns on small screen
  const mediaQuery = `(max-width: ${SMALL_BREAKPOINT} )`;

  useEffect(() => {
    window.addEventListener("resize", controlMediaQuery);
    window.addEventListener("load", controlMediaQuery);
    return () => {
      window.removeEventListener("load", controlMediaQuery);
      window.removeEventListener("resize", controlMediaQuery);
    };
  });

  const controlMediaQuery = () => {
    if (window.matchMedia(mediaQuery).matches) setOnSmallScreen(true);
    //window.matchMedia(Mediaquery) - checks whether the query is true;
    else setOnSmallScreen(false);
  };

  const handleChangeTip = (idx) => {
    setActiveTip(idx);
  };

  const displayReviewConditionally = (reviews) =>
    reviews.map((review, id) =>
      activeTip === id ? <Review {...review} key={review.alt} id={id} /> : null
    );

  const displayReview = (reviews) =>
    reviews.map((review, id) => (
      <Review {...review} key={review.alt} id={id} />
    ));

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-title">
          <h2> What they've said</h2>
        </div>

        <div className="reviews-wrapper">
          {onSmallScreen
            ? displayReviewConditionally(reviews)
            : displayReview(reviews)}
          <div className="ctrls">
            {emptyCtrls.map((elem, idx) => (
              <div
                key={idx}
                role="button"
                onClick={() => handleChangeTip(idx)}
                className={`dot ${activeTip === idx ? "active" : null}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="btn">
          <button> Get Started</button>
        </div>
      </div>
    </div>
  );
}

const Review = ({ src, alt, author, content, id }) => (
  <>
    <div className="review">
      <div className="avatar-wrapper">
        <img src={src} alt={alt} />
      </div>
      <h2>{author} </h2>
      <div className="content">
        <p> {content} </p>
      </div>
    </div>
  </>
);
