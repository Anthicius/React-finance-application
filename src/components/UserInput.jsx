import React, { useState, useEffect } from "react";
import { calculateInvestmentResults } from "../util/investment";

export const UserInput = ({ onInputChange }) => {
  const [initInvestment, setInitInvestment] = useState("");
  const [anualInvestment, setAnualInvestment] = useState("");
  const [exReturn, setExReturn] = useState("");
  const [duration, setDuration] = useState("");


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "initInvestment") setInitInvestment(value);
    if (name === "anualInvestment") setAnualInvestment(value);
    if (name === "expReturn") setExReturn(value);
    if (name === "duration") setDuration(value);
  };


  useEffect(() => {
    if (initInvestment && anualInvestment && exReturn && duration) {
      const results = calculateInvestmentResults({
        initialInvestment: Number(initInvestment),
        annualInvestment: Number(anualInvestment),
        expectedReturn: Number(exReturn),
        duration: Number(duration),
      });

      onInputChange(results);
    }
  }, [initInvestment, anualInvestment, exReturn, duration]); 

  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initInvestment">
          Initial investment
          <input
            type="number"
            id="initInvestment"
            name="initInvestment"
            value={initInvestment}
            onChange={handleInputChange}
            required
            min={1}
          />
        </label>
        <label htmlFor="anualInvestment">
          Annual Investment
          <input
            type="number"
            id="anualInvestment"
            name="anualInvestment"
            value={anualInvestment}
            onChange={handleInputChange}
            required
            min={1}
          />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="expReturn">
          Expected Return (%)
          <input
            type="number"
            id="expReturn"
            name="expReturn"
            value={exReturn}
            onChange={handleInputChange}
            required
            min={1}
          />
        </label>
        <label htmlFor="duration">
          Duration (Years)
          <input
            type="number"
            id="duration"
            name="duration"
            value={duration}
            onChange={handleInputChange}
            required
            min={1}
          />
        </label>
      </div>
    </div>
  );
};
