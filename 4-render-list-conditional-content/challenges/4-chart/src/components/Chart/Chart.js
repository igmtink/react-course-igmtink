import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // !Use (Spread Operator) to extract all values in array from (dataPointValues)
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <ul className="flex gap-3 overflow-auto">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          value={dataPoint.value}
          maxValue={totalMaximum}
          month={dataPoint.month}
        />
      ))}
    </ul>
  );
};

export default Chart;
