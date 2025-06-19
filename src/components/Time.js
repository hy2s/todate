import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());  // 현재 시간 저장할 변수 초기값은 현재 시간
  useEffect(()=>{
    const intervalID = setInterval(()=>{
      setTime(new Date());  // 시간이 흘러가는 것처럼 나타낼 수 있도록 현재 시간을 다시 설정
    },1000);  // 1초(1000밀리초)에 한 번씩 현재 시간을 갱신
    const closeEffect = () => {  // 무한반복 상태를 종료
      clearInterval(intervalID);
    }
    return closeEffect;
  }, []);
  
  const hour = time.getHours().toString().padStart(2,"0");
  const minute = time.getMinutes().toString().padStart(2,"0");
  const second = time.getSeconds().toString().padStart(2,"0");
  
  const today = new Date();
  const month = today.getMonth()+1;
  const day = today.getDate();
  const dayIndex = today.getDay();
  const daysKor = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayName = daysKor[dayIndex];

  return (
    <div className="time-wrap">
      <h3>{month}월 {day}일 {dayName}</h3>
      <div className="time">
        <h1>{hour}</h1> 
        <h2>:</h2>
        <h1>{minute}</h1> 
        <h2>:</h2>
        <h1>{second}</h1> 
      </div>
    </div>
  );
};

export default Time;