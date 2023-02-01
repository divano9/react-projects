import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}{" "}
      {/* if showInfo is true, than show <p>info</p> */}
    </article>
  );
};

export default Question;

/* 
  return questions.map((question) => {
    const { id, title, info } = question;
    return (
      <div className="question" key={id}>
        <header>
          <h4 className="title">{title}</h4>
          <button className="btn">
            <AiOutlinePlus />
          </button>
        </header>
        <p>{info}</p>
      </div>
    );
  }); */
