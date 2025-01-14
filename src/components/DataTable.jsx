import React, { useState } from "react";
import { formatter } from "../util/investment";

const DataTable = ({ initialvalue, anualValue, expectedReturn, duration }) => {
  let totalInvestMentValue = initialvalue;
  const arrData = [];

  let totalInterest = 0;

  // for (let i = 1; i <= duration; i++) {
  //   const interestonYear =
  //     (totalInvestMentValue + anualValue) * (expectedReturn / 100);
  //   totalInterest = totalInterest + interestonYear;
  //   totalInvestMentValue += anualValue;

  //   arrData.push({
  //     year: i,
  //     investmentValue: totalInvestMentValue,
  //     interest: interestonYear,
  //     totalInterest: totalInterest,
  //     investmentCaptile: initialvalue + anualValue * i,
  //     anualValue,
  //   });

  //   totalInvestMentValue += totalInterest;
  // }
  for (let i = 1; i <= duration; i++) {
    const interestOnYear =
      (totalInvestMentValue + anualValue) * (expectedReturn / 100);

    totalInterest += interestOnYear;
    totalInvestMentValue += anualValue + interestOnYear; // Correctly add interest for the year.

    arrData.push({
      year: i,
      investmentValue: totalInvestMentValue, // Accumulated value with interest.
      interest: interestOnYear, // Interest earned this year.
      totalInterest: totalInterest, // Cumulative interest.
      investmentCapital: initialvalue + anualValue * i, // Only user contributions.
      anualValue,
    });
  }

  let totalEarn = 0;

  const getIndex = arrData.length - 1;
  let userInvest = 0;
  if (arrData.length > 0) {
    userInvest = arrData[getIndex].investmentCapital;
    totalEarn = Math.round(arrData[getIndex].investmentValue);
  }

  let summary = (
    <div className="summary text-left p-5 flex flex-col gap-4 rounded w-full border-2 border-black">
      <p className="text-lg font-semibold">
        Total Investment Duration: {duration} years
      </p>
      <p className="text-lg font-semibold">
        Total Investment: {formatter.format(userInvest)}
      </p>
      <p className="text-lg font-semibold">
        Total Return: {formatter.format(totalEarn)}
      </p>
      <p className="text-lg font-semibold">
        Profit Earned: {formatter.format(totalEarn - userInvest)}
      </p>
    </div>
  );

  // console.log(arrData);

  return (
    <>
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
                  <td>{formatter.format(values.investmentCapital)}</td>
                  <td>{formatter.format(values.anualValue)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {arrData.length > 0 ? summary : undefined}
    </>
  );
};

export default DataTable;
