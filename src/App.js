import { useEffect, useState } from "react";
import "./App.scss";
import LoginForm from "./components/LoginForm";
import Time from "./components/Time";
import MainPage from "./components/MainPage";
import Weather from "./components/Weather";
import Side from "./components/Side";
import Quote from "./components/Quote";
// import bgimg from './images/img-02.jpg';

const App = () => {
  const USER_KEY = "user_name";
  const [user, setUser] = useState('');
  useEffect(()=>{  // 처음 시작하자마자 user_name을 읽어와야 함
    const saved = localStorage.getItem(USER_KEY);  // localStorage에서 데이터를 읽어오기
    if ( saved ) {  // 저장된 데이터가 있으면 
      setUser(saved);  // setUser에 데이터 불러오기
    }
  }, []);
  const handleUser = (data) => {  // 'onLogin'으로 자식에게 user값 받아서 부모 user에 저장
    localStorage.setItem(USER_KEY, data); // USER_KEY라는 key 이름에 data로 받은 값 저장
    setUser(data)
  }
  const handleLogout = () => {  // 'onLogout'으로 자식이 로그아웃 버튼 클릭하면 user값을 빈값으로 변경
    localStorage.removeItem(USER_KEY);  // USER_KEY라는 key 이름에 저장된 값 삭제
    setUser('')
  }

  // const [dark, setDark] = useState(false);
  // useEffect(()=>{
  //   const saved2 = localStorage.getItem("theme");
  //   if( saved2 ) {
  //     setDark(saved2);
  //   }
  // }, []);
  // useEffect(()=>{
  //   document.body.style.color = dark ? "#FFFFFFB2" : "#FFFFFFE5";
  // }, [dark])

  return (
    <div className="app dark">
      {user && <Weather />}
      <div className="main-wrap">
        <div className="main-title">
          <Time />
          {user && <Quote />}
        </div>
        {
          user ? 
          ( <MainPage user={user} /> ) : 
          ( <LoginForm onLogin={handleUser}/> )
        }
      </div>
      {user && <Side user={user} onLogout={handleLogout}/>}
    </div>
  );
};

export default App;
