import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "이렇게",
    "쉽게 가르쳐준다고?",
  ]);

  console.log(글제목)

  
  let [따봉, 따봉변경] = useState(0);
  
  let [modal, modal변경] = useState(false);
  
  let [누른제목, 누른제목변경] = useState(0)
  
  let [입력값, 입력값변경] = useState('')


  function 제목바꾸기() {
    // 값을 바꾸려고 복제 후 다시 대입
    // deepcopy를 해서 수정해야 한다 그냥 복제(=) 를 하면 값 공유가 된다
    let newArray = [...글제목];
    // deepcopy는 값 공유가 안되고 별개의 복사를 한다
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
    // 글제목변경(['여자 코트 추천',"이렇게","쉽게 가르쳐준다고?"])
  }

  // 배열과 push함수를 사용해 for문으로 반복되는 ui를 출력할 수 있다
  // function 반복된ui(){
  //   var 어레이 = [];
  //   for (var i = 0;i<3;i++){
  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이;
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>



      {글제목.map(function (글,i) {

        return (
          <div className="list" key={i}>
            <h3 onClick={() => { 누른제목변경(i) }}> {글}
              <span onClick={ () => {따봉변경(따봉 + 1)}}>👍</span>
              { 따봉}
            </h3>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
        )
      })}


      {/* <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={function i() {
              따봉변경((따봉 += 1));
              console.log(따봉);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>
          {" "}
          {글제목[2]}{" "}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div> */}

      <div className="publish">
        <input onChange={ (e) => {입력값변경(e.target.value)}}/>
        <button onClick={ () => {
          // console.log(글제목.unshift(입력값))

          let newArray = [...글제목];
          newArray.unshift(입력값)
          글제목변경(newArray)
          //왜 입력값을 변경해야지 적용이 될까
          
          }}>저장</button>
      </div>

      
      {/* <input onChange={(e) => { 입력값변경(e.target.value) }}/> */}

      <button onClick={() => {modal변경(!modal)}}>열고닫기</button>

      {/* 반복문을 사용하려면 map함수를 사용해야 한다 */}
      {/* 글제목 이 결국 반복해야할 개수이기 때문에 글제목에 map함수를 사용 */}

      {/* 따봉이 여러 개 모두 똑같은 따봉을 사용해서 따봉 개수가 같다 */}


      {/* <input onChange={ (e) => {입력값변경(e.target.value)}}/> */}

      {/* ----------------- */}

      {/* 모달창을 만든다고 할 때 if문(삼항연산자)을 사용할 수 있다 */}
      {/* state에 모달창을 띄울 스위치를 만든다 */}
      {modal === true ? <Modal 글제목 = {글제목} 누른제목={누른제목}></Modal> : null}

      {/* <div className='modal1'>
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div> */}
    </div>
  );
}

// 이렇게 modal이라는 function을 밖에서 선언했는데,
// 다른 function안에 있는 값을 가져오려면
// props를 사용할 수 있다
function Modal(props) {
  return (
    <div className="modal1">
      <h2>{props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}



export default App;
