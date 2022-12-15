import React, { useMemo } from "react";

const DemoList = (props) => {
  console.log("DemoList RUNNING");

  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("Items Sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div className="grid gap-12 grid-cols-1 w-full text-center">
      <h1 className="text-lg font-bold">{props.title || "Old Title"}</h1>
      <ul className="grid grid-cols-1 text-center gap-4">
        {sortedList.map((item) => (
          <li key={Math.random()} className="p-4 bg-neutral-900 rounded-md">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// !(React.memo) for preventing re-render (Component) if the (props) value is not changed
export default React.memo(DemoList);
