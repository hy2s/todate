import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Memo from "./Memo";

const MainPage = () => {
  const TODOS_KEY = "todos";
  const USER_MEMO = "user_memo";
  const [todos, setTodos] = useState([]);
  const [memo, setMemo] = useState('');

  // 처음에 localstorage에 저장된 값이 있으면 읽어와서 불러오기
  useEffect(()=>{
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if( savedTodos ){
      setTodos(JSON.parse(savedTodos));  // 문자열 -> 객체로 변환
    }
    const savedMemo = localStorage.getItem(USER_MEMO);
    if( savedMemo ){
      setMemo(savedMemo);  // 문자열 -> 객체로 변환
    }
  }, []);

  // todos가 변경되면 localstorage에 저장
  useEffect(()=>{
      const saved = JSON.stringify(todos);  //  객체 -> 문자열로 변환
      localStorage.setItem(TODOS_KEY,saved);
  }, [todos]);

  // memo 저장 버튼 누를 때 저장
  const saveMemo = (text) => {
    localStorage.setItem(USER_MEMO, text);
    setMemo(text);
  };

  // memo 삭제 버튼
  const clearMemo = () => {
    localStorage.removeItem(USER_MEMO);
    setMemo('');
  };

  const addTodo = (text) => {
    const newTodo = {id:Date.now(), todo:text, done:false};
    setTodos([...todos,newTodo]);
  }
  const deleteTodo = (id) => {
    const update = todos.filter((item)=>{
      return item.id !== id;
    });
    setTodos(update);
  }
  const toggleTodo = (id) => {
    const update = todos.map((item)=>
      item.id === id ? {...item, done:!item.done} : item
    );
    setTodos(update);
  }

  return (
    <div className="box-wrap">
      <div className="wrap">
        <h2>TODO LIST</h2>
        <TodoForm onAdd={addTodo}/>
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
      </div>
      <div className="wrap memo">
        <Memo value={memo} onMemo={setMemo} onSave={saveMemo} onClear={clearMemo} />
      </div>
    </div>
  );
};

export default MainPage;