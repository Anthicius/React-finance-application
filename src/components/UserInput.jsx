import React, { useState, useEffect } from "react";
import { calculateInvestmentResults } from "../util/investment";

export const UserInput = ({ onInputChange }) => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initInvestment">Initial investment </label>

          <input
            type="number"
            id="initInvestment"
            name="initInvestment"
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleInputChange("initialInvestment", e.target.value)
            }
            required
            min={1}
          />
        </p>
        <p>
          <label htmlFor="anualInvestment">Annual Investment</label>

          <input
            type="number"
            id="anualInvestment"
            name="anualInvestment"
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleInputChange("annualInvestment", e.target.value)
            }
            required
            min={1}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expReturn">Expected Return (%) </label>

          <input
            type="number"
            id="expReturn"
            name="expReturn"
            value={userInput.expectedReturn}
            onChange={(e) =>
              handleInputChange("expectedReturn", e.target.value)
            }
            required
            min={1}
          />
        </p>
        <p>
          <label htmlFor="duration"> Duration (Years)</label>

          <input
            type="number"
            id="duration"
            name="duration"
            value={userInput.duration}
            onChange={(e) => handleInputChange("duration", e.target.value)}
            required
            min={1}
          />
        </p>
      </div>
    </section>
  );
};
