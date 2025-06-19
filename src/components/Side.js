import { useState } from "react";

const Side = ({ user, onLogout, onDark }) => {
  const [index, setIndex] = useState(0);

// const bgImages = [
//   "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('./images/img-01.jpg')",
//   "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('./images/img-02.jpg')",
//   "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('./images/img-03.jpg')",
//   "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('./images/img-04.jpg')"
// ];

//   const handleChangeBackground = () => {
//     const nextIndex = (index + 1) % bgImages.length;
//     document.body.style.backgroundImage = bgImages[nextIndex];
//     setIndex(nextIndex);
//     console.log(bgImages[nextIndex]);

//   };

  return (
    <div className="side">
      {user && <h2>{user} 님, 반가워요!</h2>}
      <div className="side-btnwrap">
        <button onClick={onLogout}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i> &nbsp;로그아웃
        </button>
        {/* <button onClick={() => onDark()}>
          <i className="fa-solid fa-circle-half-stroke"></i> &nbsp;다크모드로 변경
        </button> */}
        {/* <button>
          <i className="fa-solid fa-image"></i> &nbsp;배경 변경
        </button> */}
      </div>
    </div>
  );
};

export default Side;
