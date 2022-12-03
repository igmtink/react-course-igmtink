const ExpensesFilter = (props) => {
  // !Pass the child component (ExpensesFilter.js) data to our parent component (App.js)
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="grid">
      <select
        value={props.selected}
        onChange={dropDownChangeHandler}
        className="bg-blue-500 p-2 rounded-md justify-self-end font-medium"
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
