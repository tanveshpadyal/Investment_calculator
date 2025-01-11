import React, { useState } from "react";
import { formatter } from "../util/investment";

const DataTable = ({ initialvalue, anualValue, expectedReturn, duration }) => {
  let totalInvestMentValue = initialvalue;
  const arrData = [];

  let totalInterest = 0;

  for (let i = 1; i <= duration; i++) {
    const interestonYear = totalInvestMentValue * (expectedReturn / 100);
    totalInterest = totalInterest + interestonYear;
    totalInvestMentValue += anualValue;

    arrData.push({
      year: i,
      investmentValue: totalInvestMentValue,
      interest: interestonYear,
      totalInterest: totalInterest,
      investmentCaptile: initialvalue + anualValue * i,
      anualValue,
    });
  }

  return (
    <div className="table_of_inv overflow-x-scroll w-full" id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {arrData.map((values, index) => {
            return (
              <tr key={index}>
                <td>{values.year}</td>
                <td>{formatter.format(values.investmentValue)}</td>
                <td>{formatter.format(values.interest)}</td>
                <td>{formatter.format(values.totalInterest)}</td>
                <td>{formatter.format(values.investmentCaptile)}</td>
                <td>{formatter.format(values.anualValue)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
