import React from "react";
import { formatter } from "../util/investment";

const Result = ({ data }) => {
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <>
      {data.map((item) => {
        const totalInterest =
          item.valueEndOfYear -
          item.annualInvestment * item.year -
          initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - totalInterest;

        return (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Result;
