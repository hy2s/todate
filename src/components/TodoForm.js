import { useState } from "react";

const TodoForm = ({onAdd}) => {
  const [task, setTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if ( trimmed ){
      onAdd(task);
      setTask('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;