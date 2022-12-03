import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {
      month: "JAN",
      value: 0,
    },
    {
      month: "FEB",
      value: 0,
    },
    {
      month: "MAR",
      value: 0,
    },
    {
      month: "APR",
      value: 0,
    },
    {
      month: "MAY",
      value: 0,
    },
    {
      month: "JUN",
      value: 0,
    },
    {
      month: "JUL",
      value: 0,
    },
    {
      month: "AUG",
      value: 0,
    },
    {
      month: "SEP",
      value: 0,
    },
    {
      month: "OCT",
      value: 0,
    },
    {
      month: "NOV",
      value: 0,
    },
    {
      month: "DEC",
      value: 0,
    },
  ];

  // !For loop (of) is for array
  // !For getting all (Expense Data)
  for (const expense of props.expenses) {
    // !Get the month from (Expense Data)
    const expenseMonth = expense.date.getMonth(); // !This is will return 0 - 11 months

    // !Get the index of (chartDataPoints) using (Expense Data) months
    // !And pass the (Expense Data) amount to the (chartDataPoints) value
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
