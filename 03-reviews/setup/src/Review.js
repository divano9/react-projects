import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]; // as index changes so will the person

  const checkNum = (number) => {
    if (number > people.length - 1) {
      //if number gous over the array length reset it to beginnign
      return 0;
    }
    if (number < 0) {
      // if number goes below 0 reset it at the end of the array
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length); // random whole number between 0 and array length
    if (randomNum === index) {
      // if current number is equal to previos number than add plus 1 to it(no reppetition)
      randomNum = index + 1;
    }
    setIndex(checkNum(randomNum));
    console.log(randomNum);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        {" "}
        surprise me
      </button>
    </article>
  );
};

export default Review;
