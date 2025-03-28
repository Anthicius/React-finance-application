import React, { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export const UserInput = () => {
  const [initInvestment, setInitInvestment] = useState(null);
  const [anualInvestment, setAnualInvestment] = useState(null);
  const [exReturn, setExReturn] = useState(null);
  const [duration, setDuration] = useState(null);

  if(initInvestment && anualInvestment && exReturn && duration){
  const results = calculateInvestmentResults({
    initialInvestment: initInvestment,
    annualInvestment: anualInvestment,
    expectedReturn: exReturn,
    duration: duration,
  });
}

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
            onChange={(e) => setInitInvestment(e.target.value)}
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
            onChange={(e) => setAnualInvestment(e.target.value)}
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
            onChange={(e) => setExReturn(e.target.value)}
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
            required
            min={1}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};
