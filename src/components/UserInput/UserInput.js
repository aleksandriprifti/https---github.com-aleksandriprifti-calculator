import React, { useState } from "react";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  "duration": 10,
};

const UserInput = () => {
  const [inputs, setInputs] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();

    const investData = {
      saving: inputs["current-savings"],
    };
    console.log(investData);

    setInputs({
      savings: "",
    });
  };

  const resetHandler = () => {
    setInputs(initialUserInput);
    console.log("Reset");
  };

  const inputChangeHandler = (input, value) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={inputs["current-savings"]}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={inputs["yearly-contribution"]}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={inputs["expected-return"]}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={inputs.duration}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
