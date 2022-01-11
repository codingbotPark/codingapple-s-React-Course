import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
// import Data from "./data"
import styled from 'styled-components'
import "./Detail.scss"

import {재고context} from "./App.js"

import {CSSTransition} from "react-transition-group"

import { Nav } from "react-bootstrap"
import { connect } from "react-redux"

let 박스 = styled.div`
  padding:20px
`;

let 제목 = styled.h4`
  font-size:25px;
  color : ${props => props.색상}
`;


function Detail(props) {

  console.log(props)
  console.log(props.shoes)

  let [alertBox,setAlertBox] = useState(true)
  let [inputData, inputData변경] = useState();

  let [누른탭, 누른탭변경] = useState(0)
  let [스위치, 스위치변경] = useState(false)

 
  useEffect(() => {

    // 2초 후 만든 alert창을 없애기
    let 타이머 = setTimeout(() => {setAlertBox(false)}, 2000)
    // 이런 Timout은 변수로 지정을 많이 해놓는다(타이머 삭제 가능)

    // 이런식의 훅 사용은 컴포넌트가 사라졌을 때 코드를 실행시킬 수 있다
    // return function 어쩌구() {} 

    // 실행할 것들이 많다면
    // useEffect를 여러 번 사용 가능하다
    // 여러 개의 useEffect를 생성하면 위에서부터 실행된다

    // 이 컴포넌트에 나가면 타이머를 제거해준다
    return () => {clearTimeout(타이머)}
  },[alertBox])
  // 특정한 상황에 재 렌더링이 일어나도록 대괄호 안에 실행 조건이 생길 수 있다
  // alertBox를 넣었기 때문에 alertBox가 변경되었을 때 재 렌더링이 일어난다


  let {id} = useParams();
  //// 내 코드
  // let dataNum
  // {
  //   for (dataNum = 0;dataNum<Data.length;dataNum++){
  //     console.log(Data[dataNum].id)
  //     if (Data[dataNum].id == id){
  //       break;
  //     }
  //   }
  // }
  // console.log(dataNum)
  //// 애플코딩 코드
  let 찾은상품 = props.shoes.find(function(상품){
    return 상품.id == id
  });

  
    // 현재 내가 디테일하게 본 상품을 로컬스토리지에 넣기
    useEffect (()=>{
      // 최근아이템들이 없을 때 만들어준다
      if(localStorage.getItem("recentItems") === null){
        let makeArray = new Array
        // localStorage.setItem("recentItems", JSON.stringify([]))
        localStorage.setItem("recentItems", JSON.stringify(makeArray))
      } else { //최근아이템중 현재 페이지가 있을 때
        let checkRecentItems = JSON.parse(localStorage.getItem("recentItems")).indexOf(찾은상품.id)
        if(checkRecentItems > -1){//찾았을 때
          //찾은 자리를 지워준다
          let removeCommonPage = JSON.parse(localStorage.getItem("recentItems"))
          removeCommonPage.splice(checkRecentItems,1)
          localStorage.setItem("recentItems",JSON.stringify(removeCommonPage))
        } 
      }
      // 로컬스토리지가 있을 때와 없을 때 모두 저장은 하기 때문
      let copyLocalStorage = JSON.parse(localStorage.getItem("recentItems"))
      copyLocalStorage.unshift(찾은상품.id)
      localStorage.setItem("recentItems",JSON.stringify(copyLocalStorage))
    },[])



  let history = useHistory();

    return (
        <div className="container">
          <박스>
            <제목 className="red">Detail</제목>
          </박스>

          <input onChange={(e) => {inputData변경(e.target.value)}}/>

          {
            alertBox === true
          ?<div className="my-alert my-alert2" >
            <p>재고가 얼마 남지 않았습니다</p>
          </div>
          :null
          }

          <div className="row">
            <div className="col-md-6">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
              <p>{찾은상품.price}</p>

              <Info 재고 = {props.재고}></Info>

              <button className="btn btn-danger" onClick={() => {
                props.재고변경([9,11,12]);
                props.dispatch({type:'항목추가',데이터 :{id:찾은상품.id,name:찾은상품.title,quan:1}})
                history.push('/cart')
                }}>주문하기</button>
              <button className="btn btn-danger" onClick={() => {history.goBack()}}>뒤로가기</button>
            </div>
          </div>

          {/* 이 버튼 누르면 아래의 div를 보여주기*/}
          <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={() => {스위치변경(false); 누른탭변경(0)}}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={() => {스위치변경(false); 누른탭변경(1)}}>Option 2</Nav.Link>
            </Nav.Item>
          </Nav>

          <CSSTransition in={스위치} className="wow" timeout={500}>
            <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
          </CSSTransition>
          
        </div>
    )
}

function TabContent(props){
  useEffect(() => {
    props.스위치변경(true);
  })

  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다</div>
  } else if (props.누른탭 === 1){
    return <div>1번째 내용입니다</div>
  } else if (props.누른탭 === 2){
    return <div>2번째 내용입니다</div>
  }
}

function Info (props){
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}

function state를props화(state){
  console.log(state)
  return {
    state: state.reducer,
    alert열렸니 : state.reducer2
  }
}

export default connect(state를props화)(Detail)