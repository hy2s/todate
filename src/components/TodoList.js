
const TodoList = ({todos, onDelete, onToggle}) => {
  if( todos.length === 0 ){
    return <p className="none">할 일이 없습니다</p>;
  }
  return (
      <ul>
        {
          todos.map((item) => {
            return (
                <li key={item.id}>
                <input 
                  type="checkbox"
                  id={item.id}
                  onChange={()=>{onToggle(item.id)}}
                  checked={item.done}
                />
                <label htmlFor={item.id}><span style={{textDecoration: item.done ? 'line-through' : 'none'}}>{item.todo}</span></label>
                <button className="delete-btn" onClick={()=>{onDelete(item.id)}}>X</button>
                </li>
            );
          })
        }
      </ul>
  );
};

export default TodoList;