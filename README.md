## Part 1 : 문법 살펴보기

react, angular, vue와 같은 라이브러리를 사용하는 이유는
데이터 바인딩 때문이다

블로그를 만든다 할 때 데이터는 맨날 바뀐다
이를 서버에서 가져온 데이터라 칠 때
이 데이터를 변수에 저장, 프론트에 보여주는 작업
이러한 작업을 데이터 바인딩이라 한다

이와같은 src,id,href등의 속성도 바인딩이 가능하다


데이터는
1. 변수에 넣거나
1. state에 넣거나

블로그 글 리스트 UI 완성하기
(제목 내용은 state 이용)

useState로 state를 사용할 수 있고 useState는 변수와 함수 이렇게 2개를 만든다  
변수는 사용될 변수이고 함수는 그 변수를 변경할 함수이다

**변수를 변경하는 방법은 함수의 인자로 달라질 변수의 값을 넣는다**

**리액트의 component문법을 사용해 치환하여 html을 나타낼 수 있다**

component를 만들 때는
1. 이름은 대괄호
2. return 안 하나의 태그로 묶어야 한다

component를 만들면 좋은 것은
* 반복출현하는 html덩어리들
* 자주 변경되는 html ui들(재 렌더링이 자주일어나는 것들을 따로 해놓으면 성능적으로 좋다)
* 다른 페이지 만들 때

컴포넌트의 단점
* state쓸 때 복잡해진다

**다른 함수 안에 있는 값을 사용할 때는 prop를 사용해 데이터를 받아야 한다**


<br>
---
<br>

## Part 2 : 쇼핑몰 프로젝트

1강
* Bootstrap을 이용
[react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)

2강
* 이미지를 src에 넣은 파일은 파일명 변경 + 앞축
* public에 넣은 파일은 보존되고 사용할 때 절대경로/파일명.jpg로 써야한다 

3강
* import / export 로 파일을 쪼개어 사용한다
* 여러개의 변수들을 export할 때 중괄호를 사용한다 `export {변수1, 변수2}`

5강
* 세팅과 기본 라우팅
* `react-router-dom` 을 사용, 사용하는 곳에 import 를 해준다
* BrowserRouter 와 HashRouter의 차이는 HashRouter가 조금 더 라우팅을 안전하게 할 수 있게 도와준다. 왜냐하면 url로 서버와 통신을 할 수 있는데 잘못해서 서버에 요청을 하는 동작을 하지 않을 수 있다. BrowserRouter는 잘못하면 서버와 통신이 일어날 수 있다
* Route는 매칭이 되는 것들은 다 보여주기 때문에 `exact` 속성을 사용하면 url이 정확히 맞을 때의 경우를 만들 수 있다

6강
* 리액트 라우터 라이브러리의 링크 태그와 to속성을 활용해 페이지 이동을 만들 수 있다
* react-router-dom 라이브러리에 있는 `useHistory` 는 방문기록 등을 저장해놓는 객체로 뒤로가기 버튼 등을 만들 때 유용하다(`history.goBack` 함수를 사용하면 전으로 이동)
* `history` 함수 `push` 로 특정 경로로 이동도 가능하다 (예) `history.push('/')`)
* `:id` 를 `<Route>` 의 `path` 로 주면 아무 경로일 때 모두를 의미한다
* `Switch` 컴포넌트로 `Route` 컴포넌트를 감싸주면 여러개의 경우가 맞아도 가장 위 하나만 보여주게 된다

7강
* url 의 파라미터로 상세페이지를 만들 수 있고 (route할 때 :id(아무숫자) 의 값의 번째 글을 보여주는 느낌), `react-router-dom` 의 `useParams` 훅을 사용하여 이러한 행동을 할 수있다 = 이러한 방법을 사용했을 때 순서가 바뀌면 상세페이지도 문제가 생기기 때문에 영구번호를 사용하여 데이터를 찾는것이 바람직하다

8강
* 많은 컴포넌트가 생기면 css작성에 문제가 생길 수 있다, 이를 컴포넌트에 css를 직접 장착 하는 방법으로 해결(styled-components라이브러리를 사용)할 수 있고 이를 CSS in JS 라고도 한다
* styled-components를 사용할 때 조금씩 다른 스타일을 적용하고싶을 때 props를 사용한다면 더 재활용성 있는 코드를 만들 수 있다

9강
* sass를 `npm install node-sass` 를 통해 설치, sass는 css를 조금 더 프로그래밍스럽게 작성하도록 돕는다(변수, 연산자, 함수, extend/import등을 사용가능)
* `node-sass`는 sass로 작성한 파일을 css로 컴파일 하는 역할을 한다
#### SASS의 장점
1. `$변수명 : `으로 색상, 픽셀값 등을 변수로 저장할 수 있다
1. import가 되기 때문에 자주쓰는 css(reset css 등) 을 import하여 사용할 수 있다
1. nesting문법
```css
/* 기존문법 */
div.container h4{
    color:blue
}
div.container p{
    color:green
}
```
```scss
/* nesting문법 */
div.container {
    h4{
        color:blue
    }
    p{
        color:green
    }
}
```

10~11강
* 컴포넌트의 Lifecycle이란 말그대로 컴포넌트의 인생이라 할 수 있다 (생성, 업데이트, 삭제등이 일어날 수 있다). 그런 Lifecycle에 훅(Hook)을 걸 수 있다 이는 컴포넌트의 인생 중간중간에 명령을 줄 수 있다
* useEffect라는 훅은 컴포넌트가 mount되었을 때, 컴포넌트가 update되었을 때 특정 코드를 실행시킬 수 있다

12~13강
* Ajax는 서버에 새로고침 없이 요청 할 수 있도록 도와준다
* 서버에게 요청을 하는 방법에는 크게 get(특정 페이지/ 자료읽기) 와 post(서버로 중요 정보 전달) 요청이 있다
* 리액트, 뷰에서 가장 많이 사용되는 axios라이브러리는 호완성이 높다
* `axios.get('서버url')` 로 값을 가져오고, `axios.post('서버url')` 로 값을 보내는 등의 행동을 할 수 있다
* 성공적으로 값을 가져왔을 때 `.then` , 가져오지 못했을 때 `.catch` 로 각각의 행동을 지정할 수 있다

14강
* 여러 단계의 컴포넌트를 거쳐 변수와 state변경함수를 props로 값 넘기기를 하면 앱이 복잡해지게 된다 그래서 ContextAPI 혹은 redux 등의 라이브러리로 상태관리를 할 수 있다

<br>
---
<br>

## part 3 : 실무에 필요한 부가내용

1강
* 리액트 사이트를 배포할 때 그냥 app.js파일을 그대로 올리는게 아니라 build용 파일을 생성 후 올려야 한다(웹브라우저는 html css js만 해석할 수 있기 때문에)
* 터미널에 build명령어 `npm run build`

2강
* 여러 번의 props를 해야할 때 contextAPI사용
* contextAPI를 사용하는 방법은 `let 재고context = React.createContext();` 와 같이 범위를 생성하고, 같은 값을 공유할 HTML을 범위로 싸맨다
* props로(value) 값을 공유해주면 태그 안의 것들은 값 공유가 된다

3강
* Tab 기능 만들기 - 원래는 useState로 버튼이 true인지 false인지를 저장했다면 여러 개의 tab은 몇 번째 버튼을 눌렀는지 그 상태를 저장하여 만든다
* animation 을 쉽게 주기 위해 `react-transition-group` 라이브러리를 설치, 세팅 후 Transition에 변화를 주고 싶은 태그를 `CSSTransition`태그로 감싸고, in, className**s**, timeout 속성을 주면 된다
* classNames로 준 class이름을 css로 등장,동작에 따라 다른 값을 주면 된다

4강
* `npm install redux react-redux` 로 redux와 react-redux 를 설치할 수 있다
* index.js파일에 `import {Provider} from 'react-redux'` 로 provider를 import하고 App 태그를 감싸줌으로써 모든 state들을 공유시킨다
* 공유된 데이터들을 사용하는 파일에서 function을 만들고, export default connect()()하는 과정을 거치고, store데이터를 props로 등록해준다

5강
* redux의 state 데이터의 수정방법을 미리 정의 해야 한다
* 함수를 만들어서 if문으로 데이터의 수정방법을 정의한다
* 만든 수정 방법 함수를 사용할 때는 태그에서 `props.dispatch()` 함수를 사용해 사용한다 함수 괄호 안에 if문에 혜당하는 값을 넣는다
* redux를 사용하여 데이터를 관리한다면 데이터가 잘못되었을 때 어디서 잘못 요청했는지(dispatch를 어디서 잘못했는지) 파악하기 쉽고, state데이터 관리가 용이하다(상태관리)

6강
* ui의 상태(보여주세요, 마세요)를 redux에 저장해서 사용
* 여러개의 reducer(데이터 수정함수)를 만들어 사용할 땐 reducer들(데이터 수정함수)을 하나의 변수에 넣어 App태그를 감쌋던 provider함수의 props로 넘겨줘야한다
* 이 때 넘겨줄 reducer(데이터 수정함수)들을 `combineReducers` 함수의 값으로 객체 형식으로(`combineReducers({reducer,reducer2})`) 사용해야한다
* reducer가 두 개가 되었기 때문에 사용했을 때의 connect()() 후 props로 등록하는 과정에서 변경이 생기게 된다

```js
//redux로 props로 넘겨준 값을 가져오기 위한 함수
function 함수명(state){
    return {
        state : state
    }
}

export default connect(함수명)(Cart)
```
위의 코드를 아래와 같이 바꾸어 줘야 한다

```js
//redux로 props로 넘겨준 값을 가져오기 위한 함수
function 함수명(state){
    return {
        state : state.reducer
    }
}

export default connect(함수명)(Cart)
```

* redux를 사용할 때 굳이 다른 컴포넌트에서 사용하지 않는 state를 저장하는 실수를 자주 한다, 다른 컴포넌트에서 사용되지 않는 state는 useState로 저장하는 것이 바람직하다

7강
* redux에서 dispatch로 수정을 요청할 때 데이터를 보낼 수도 있다
* 보낸 데이터는 redux의 데이터를 바꿔주는 함수에서 **애션 파라미터에 저장** 되어있다

8강
* 앞에서 했던 export default에서 connect하여 다른 함수로 넘기는 과정을 `useSelector` 훅을 사용하면 같은 효과를 낼 수 있다
* 앞에서 했던 dispatch를 `useDispatch` 훅을 사용하면 같은 효과를 낼 수 있다

9강
* 메인에서 상품들을 누르면 detail페이지로 이동하게 함
* cart페이지에서 +, - 할 때 데이터의 번호도 같이 보내서 각각의 재고가 바뀌게 함
* detail페이지에서 주문하기를 누르면 진짜 페이지 내의 상품을 추가

10강
* 리액트에서 자주 쓰이는 if문 작성작성 패턴

11강
* state변경함수 사용할 때 async를 주의(2022년 이후 18.0버전 batching업데이트로 대체가능)
* useState에서 state변경 함수들은 모두 비동기(asynchronous)적으로 처리 되기 때문에 예상치 못한 문제가 생길 수 있다
* 이런 문제를 동기적으로 실행되도록 하려면 useEffect를 사용하여 어떻게 잘 해본다

12강
* 함수나 오브젝트는 선언해서 변수에 담아 사용하는 것이 좋다(메모리 할당에 더 효율적으로 작동한다)
* 애니메이션을 줄 때 margin, width, padding과 같은 레이아웃을 잡는 속성들을 변경하면 렌더링 시간이 오래 걸린다(브라우저에서 힘들어한다) 그래서 에니메이션을 줄 때 되도록이면 transform 속성을 사용하는 것이 좋다
* 컴포넌트를 import할 때 모든 import를 하려면 부담이 될 수 있다, 이 때 lazy loading을 할 수 있다, react에서 lazy, Supense 를 가져오고, import대신 lazy를 사용, Suspense컴포넌트로 lazy loading하는 컴포넌트를 감싸준다

```js
// 그냥 import
import Detail from './Detail.js';
.
.
.
<Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
```
```js
// lazy loading할 때
let Detail = lazy(()=>import('./Detail.js'))
.
.
.
//lazy loading할 컴포넌트를 Supense컴포넌트로 감싼다
<Supense fallback={<div>로딩중이에요</div>}>
<Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
</Supense>
```

13강
* 불필요한 재렌더링을 막기 위해 memo함수르 사용한다
* memo의 단점으로는 momo함수는 기존 props와 바뀐 props를 비교연산 후 컴포넌트 업데이트를 할지말지 결정한다

14강
* PWA(Progressive Web App)이란 웹사이트를 모바일 앱처럼 설치해서 쓸 수 있다(일종의 바로가기를 추가하는 느낌)  
PWA의 장점은
1. 설치 마케팅 비용이 적음
1. 아날로그 유저들을 배려
1. html,css,js 만으로 앱까지 
1. 푸시알림, 센서 등도 사용할 수 있다

PWA가 셋팅된 리액트 프로젝트를 생성해야한다  
`npx create-react-app 프로젝트명 --template cra-template-pwa` 로 pwa가 셋팅된 리액트 프로젝트를 생성할 수 있다  

PWA의 조건으로는
1. manifest.json이 있어야 한다(따로 셋팅이 요구되진않음)
1. service-worker.js가 있어야 한다(index.js에 `serviceWorkerRegistration.register` 로 만들어야 한다)

* service-worker.js 파일에 오프라인에서도 실행 되기를 원하는 파일들을 지정할 수 있다(지정된 파일들은 미리 html,css,js파일들이 하드에 저장이 된다)

15강
* DB없이 데이터를 저장하고 싶다면 localStorage에 값을 저장하면된다
localStorage문법에는
1. 자료저장`localStorage.setItem`
1. 자료출력`localStorage.getItem`
1. 자료삭제`localStorage.removeItem`

* localStorage에 object로 저장하려할 때 깨져서 저장이 된다, 깨지지 않게 넣으려면 Object를 `JSON.stringify(저장할 object)` 로 저장해서 깨지지 않게 object자료를 넣을 수 있다, 이 때 다시 `JSON.parse()` 로 다시 object로 쓸 수 있다

localStorage를 사용해 최근 본 상품 페이지를 만들기
* Detail에 들어간 상품들을 로컬스토리지에 넣는다(넣을 땐 이미 들어가있는 것을 삭제하고 가장 앞에 넣는다)
* Recent에서 로컬스토리지에 들어간 상품들을 차례대로 보여준다

17강
* Node+Express 서버와 React연동하기(build후)
* `npm init` `npm install express`
* 리액트 라우터의 문제점은 주소창에 직접 url을 입력하면 에러가 뜬다, 그래서 리액트 라우터를 쓴다면 

```js
app.get('/',function (요청,응답){
    응답.sendFile(path.join(__dirname, 'public/main.html'))
})
```
대신
```js
app.get('*',function (요청,응답){
    응답.sendFile(path.join(__dirname, 'public/main.html'))
})
```
이렇게 사용한다
* 특정 페이지에 들어갔을 때 그 페이지를 보여줄 수도 있다, 그래서 `/react`로 들어갔을 때 리액트 페이지를 보여줄 수도 있다, 만약 `/` 와 `/react` 로 두 개로 만들 때
* 다른 프로젝트를 보여줄 때 다른 프로젝트의 폴더>package.json 에서 `"homepage":"/react"` 를 추가해서, 어떤 서브 디렉토리 안에 발행할 지를 정해준다