import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./App.css";
import Data from "./data";
import Detail from "./Detail";
import axios from "axios";
import Recent from "./Recent";

import { Link, Route, Switch, useHistory } from "react-router-dom";
import Cart from "./Cart";

// 같은 값을 공유하는 범위를 생성
export let 재고context = React.createContext();

function App() {
  //import한 데이터를 shoes에 넣는다
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  console.log(재고context); 

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">T-shrit shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
            </Nav.Link>
            <Nav.Link as={Link} to="/recent" className="GoRecent">
              Recent
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>

        <Route exact path="/">
          <div className="background">
            <h2>I want to sell you somthing</h2>
            <p>You just follow me</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          <div className="container">
            {/* 같은 값을 공유한 HTML을 범위로 싸맨다 */}
            <재고context.Provider value={재고}>
              <div className="row">
                {shoes.map(function (정보, i) {
                  return (
                    <Card
                      data={정보}
                      key={i}
                      src={`https://codingapple1.github.io/shop/shoes${
                        i + 1
                      }.jpg`}
                    ></Card>
                  );
                })}
              </div>
            </재고context.Provider>

            <button
              className="btn-btn-primary"
              onClick={() => {
                // axios.post('서버 url',{id : 'codingapple', pw:1234});

                //로딩중인 UI

                //서버에 get요청
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    // 로딩중이라는 ui안보이게 처리

                    console.log(result.data);
                    shoes변경([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    console.log("실패했어요");
                  });
              }}
            ></button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고context.Provider>
        </Route>

        <Route path="/cart">
          <Cart shoes={shoes} />
        </Route>

        <Route path="/recent">
          <Recent shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div>아무거나찍었을때 이거 보여주셈</div>
        </Route>

        
      </Switch>

      {/* Route를 쓰는 다른 방법
      <Route path="/어쩌구" component={Modal}></Route> */}

      {/* 그냥 부트스트랩 문법으로 pc크기에선 가로로, 모바일에선 세로로 정렬 */}
    </div>
  );
}

const Card = (props) => {
  let 재고 = useContext(재고context);
  let history = useHistory();
  return (
    <div>
      <div
        className="col-md-4"
        onClick={() => {
          history.push("/detail/" + props.data.id);
        }}
      >
        <img src={props.src} width="100%" />
      </div>
      <h4>{props.data.title}</h4>
      <p>
        {props.data.content} & {props.data.price}
      </p>
      <Test></Test>
    </div>
  );
};
function Test() {
  let 재고 = useContext(재고context);
  return <p>{재고}</p>;
}

export default App;
