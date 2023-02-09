import React, { useEffect, useReducer } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { reducer, defaultState } from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  /* const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0); */

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    dispatch({ type: "GET_JOBS", payload: newJobs });
    // setJobs(newJobs);
    dispatch({ type: "TURN_OFF_LOADING" });
    // setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (state.loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = state.jobs[state.value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {state.jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  dispatch({ type: "SET_VALUE", payload: index });
                  //  setValue(index)
                }}
                className={`job-btn ${index === state.value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
