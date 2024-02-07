import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [추천, 추천변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [입력값, 입력변경] = useState(' ');

  [1,2,3].map(function(a){
    return '112233'
  });
  // map 사용법 배열 갯수만큼 한수안 코드를 실행해줌

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

        {
          글제목.map(function(a, i){
            return (
              <div className='list' key={i}>
                <h4 onClick={()=>{
                  setModal(!modal);
                  setModalTitle(i);
                }}>{ 글제목[i] }
                  <span onClick={ (e)=>{
                    e.stopPropagation(); //이벤트 버블링 막기
                    let like = [...추천];
                    like[i] = like[i] + 1;
                    추천변경(like);
                  } }>👍</span>{ 추천[i] }
                </h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  /* let deleteTitle = [...글제목];
                  deleteTitle[i] = "";
                  글제목변경(deleteTitle);
                  console.log(deleteTitle); --> 글제목만 지워짐 */
                  
                  let deleteTitle = [...글제목];
                  deleteTitle.splice(i,1); // 위 주석처럼 공백을 둘 것이 아닌 splice 함수를 사용해 배열에서 아이템을 지워야함. (i,1) 변수와 숫자를 적으면 됨
                  글제목변경(deleteTitle);
                  console.log(deleteTitle);
                }}>삭제</button>
              </div>
            )
          })
        }

        <input onChange={(e)=>{
          입력변경(e.target.value);
          console.log(입력값);
          }}></input>
          <button onClick={()=>{
            글제목변경(글제목.concat(입력값)); // state변경함수(기존state.concat(입력state)); > concat 함수 : 배열에 추가하는 함수
            // 글제목변경([...글제목, 입력값]); state 먼저 카피 > 카피에 입력값 > state변경함수 적용
            console.log(글제목);
          }}>글발행</button>

        {modal == true ? <Modal 글제목={글제목} 글제목변경 = {글제목변경} modalTitle={modalTitle}/> : null}
        
    </div>
  );
}

// props 전송 부모 > 자식 만 가능, 자식 > 부모 안됨, 자식 > 자식 안됨
function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.글제목[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

/* 
컴포넌트화 해두면 좋은것
반복적인 html
큰 페이지들
자주 변경되는 ui

컴포넌트 단점: state 가져다 쓸 때 문제가 생긴다
*/ 

/* 
동적인 ui 만드는 STEP (툴팁 탭 햄버거등)
1. html css 로 디자인 완성
2. ui 현재 상태를 state로 저장
3. state에 따라 어떻게 보일지 작성
*/

export default App;
