const TodoItem: React.FC<{ text: string }> = (props) => {
  return (
    <div className="p-4 rounded-md shadow-md">
      <h2>{props.text}</h2>
    </div>
  );
};

export default TodoItem;
