import { useEffect, useState } from "react";

const Memo = ({value, onMemo, onSave, onClear}) => {
  const [memo, setMemo] = useState(value);
  useEffect(() => {
    setMemo(value);
  }, [value]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setMemo(newText);
    onMemo(newText); // 자동 저장
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(memo.trim());
  };

  const handleClear = (e) => {
    e.preventDefault();
    onClear();
  };

  return (
    <>
    <div className="memo-title">
      <h2>MEMO</h2>
      <div className="btn-wrap">
        <button onClick={handleClear}>
          <i class="fa-regular fa-trash-can"></i>
        </button>
        <button type="submit" onClick={handleSave}>
          <i class="fa-regular fa-floppy-disk"></i>
        </button>
      </div>
    </div>
    <form>
      <textarea
        value={memo}
        placeholder="메모할 내용을 입력하세요"
        onChange={handleChange}
      />
    </form>
    </>
  );
};

export default Memo;