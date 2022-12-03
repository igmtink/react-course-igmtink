const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="grid gap-3">
      <div className="h-40 w-12 rotate-180">
        <div
          className="bg-blue-500 w-full transition-all"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="text-center font-medium">{props.month}</div>
    </div>
  );
};

export default ChartBar;
