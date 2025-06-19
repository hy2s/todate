import { useState } from "react";

const LoginForm = ({onLogin}) => {
  const [user, setUser] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = user.trim();
    if( trimmed ){  // 빈 값이 아니라면
      onLogin(user);  // 입력받은 user값을 부모에게 전달
      setUser('');
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          value={user}
          placeholder="이름을 입력해 주세요"
          maxLength={10}
          onChange={(e)=>{setUser(e.target.value)}}
        />
        <button type="submit">→</button>
      </form>
    </div>
  );
};

export default LoginForm;