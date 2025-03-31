import React from "react";
import { formatter } from "../util/investment";

const Result = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <tr key={item.year}>
          <td>{item.year}</td>
          <td>{formatter.format(item.valueEndOfYear)}</td>
          <td>{formatter.format(item.interest)}</td>
          <td>{formatter.format(item.annualInvestment)}</td>
        </tr>
      ))}
    </>
  );
};

export default Result;
