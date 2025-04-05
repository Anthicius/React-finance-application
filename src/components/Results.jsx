import React from "react";
import Result from "./Result";

const Results = ({userInput}) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
      {userInput ? <Result data = {userInput}/> : "No data available."}
      </tbody>
    </table>
  );
};

export default Results;
