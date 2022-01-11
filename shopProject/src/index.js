import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let alert초기값 = true;

function reducer2(state = alert초기값, 액션){
  if (액션.type === "alert닫기"){
    state = false
    return state
  }
  return state
}

let 초기값 = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진신발2", quan: 1 },
];

function reducer(state = 초기값, 액션) {
  if (액션.type === '항목추가'){

    // findIndex함수는 array안에서 원하는 데이터가 몇 번째 인덱스에 있는지 찾아주는 함수이다
    let found = state.findIndex((a) => {return a.id === 액션.데이터.id})

    // 무언갈 찾았을 때
    if (found >= 0){
      let copy = [...state];
      copy[found].quan++;
      return copy
    } else {
     
    let copy = [...state]
    copy.push(액션.데이터)
    return copy
 
    }
  }if (액션.type === "수량증가") {
    let copy = [...state];
    copy[액션.데이터].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    if (state[액션.데이터].quan === 0) {
      alert("수량이 0 이하입니다");
      return state;
    } else {
      let copy = [...state];
      copy[액션.데이터].quan--;
      return copy;
    }
  } else {
    return state;
  }
}

//reducer는 수정된 state를 뱉는 함수이다
let store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
