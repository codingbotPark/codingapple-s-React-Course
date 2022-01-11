import React, { memo, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>item id</th>
            <th>item name</th>
            <th>number</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>{props.state[0].id}</td>
            <td>{props.state[0].name}</td>
            <td>{props.state[0].quan}</td>
          </tr> */}
          {/* 반복문으로 돌리기 */}
          {state.reducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: "수량증가", 데이터: a.id });
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: "수량감소", 데이터: a.id });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {state.alert열였니 === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              dispatch({ type: "alert닫기" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
      <Parent 이름="존박" 나이="20"></Parent>
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      <Child1 이름={props.이름} />
      <Child2 나이={props.나이} />
    </div>
  );
}

function Child1(props) {
  useEffect(() => {
    console.log("렌더링됨1");
  });
  return <div>111</div>;
}
// function Child2(props) {
//   useEffect(() => {
//     console.log("렌더링됨2");
//   });
//   return <div>222</div>;
// }
// 불필요한 재랜더링을 막기위한 memo함수 사용
let Child2 = memo(function(){
  useEffect(()=>{console.log('렌더링된2')})
  return <div>222</div>
})

// //redux로 props로 넘겨준 값을 가져오기 위한 함수
// function 함수명(state){

//     return {
//         state : state.reducer,
//         alert열였니 : state.reducer2
//     }
// }
// //redux sotre데이터를 가져와서 props로 변환해주는 함수

// export default connect(함수명)(Cart)

export default Cart;
