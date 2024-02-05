import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [추천, 추천변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(a){
    return '112233'
  });
  // map 사용법 배열 갯수만큼 한수안 코드를 실행해줌

  return (
    <div className="App">
      {/* <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let newArray = [...글제목];
        newArray.sort();
        글제목변경(newArray);
      }}>가나다순정렬</button>

      <button onClick={ ()=>{

        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
      }}>👩‍🦰</button>
      
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 추천변경(추천+1) } }>👍</span> { 추천 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={ ()=>{
          setModal(!modal);
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

        {
          글제목.map(function(a, i){
            return (
              <div className='list'>
                <h4>{ 글제목[i] }
                  <span onClick={ ()=>{
                    let like = [...추천];
                    like[i] = like[i] + 1;
                    추천변경(like);
                  } }>👍</span>{ 추천[i] }
                </h4>
                <p>2월 17일 발행</p>
              </div>
            )
          })
        }

        {modal == true ? <Modal/> : null}
        
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
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
