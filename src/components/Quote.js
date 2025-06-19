import { useEffect, useState } from "react";

const quotes = [
  "꾸준함은 실력을 만들고, 인내는 기회를 불러온다.",
  "시작이 두렵다면, 더더욱 시작해야 한다.",
  "오늘의 한 걸음이 내일의 방향을 바꾼다.",
  "포기하지 않는 사람에게 실패는 그냥 과정일 뿐이다.",
  "작은 도전의 반복이 큰 변화를 만든다.",
  "불안은 준비로 이겨내고, 두려움은 행동으로 극복하라.",
  "노력은 배신하지 않는다. 단, 늦게 올 뿐이다.",
  "넘어지는 건 괜찮다. 중요한 건 다시 일어서는 용기다.",
  "당장의 결과보다 방향이 더 중요하다.",
  "끝까지 해내는 사람이 결국 이긴다.",
];

const Quote = () => {
  const [quote, setQuote] = useState('');
  // 랜덤으로 명언 추출
  useEffect( () => {
    const random = Math.floor(Math.random()*quotes.length);
    setQuote(quotes[random]);
  }, []);
  Math.random();
  return (
    <div className="quote">
      <h3>{quote}</h3>
    </div>
  );
};

export default Quote;