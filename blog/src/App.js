import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [추천, 추천변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [입력값, 입력변경] = useState(' ');
  
  let day = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  
  let today = String(year) + '년' + String(month+1) + '월' + String(day) + '일';
  let [날짜, 날짜변경] = useState([today, today, today]);
  let [오늘, 오늘변경] = useState([0, 0, 0]);

  [1,2,3].map(function(a){
    return '112233'
  });
  // map 사용법 배열 갯수만큼 함수 안 코드를 실행해줌

  /* let addPost = function(){
    if(입력값 == '' || 입력값 == null || 입력값 == undefined){
      alert("입력해주세요")
    }
    else{
      let copy =  [...글제목];
      copy.unshift(입력값); 
      글제목변경(copy);
    }
  } */

  const addPost = function () {
    let now = new Date();
    if(입력값.trim() === ''){ // trim 메서드는 문자열 양끝 공백을 제거함
      alert("입력해주세요");
    }else{
      let copy =  [...글제목];
      copy.unshift(입력값); 
      글제목변경(copy);

      let like = [...추천];
      like.unshift(0);
      추천변경(like);

      let copy2 = [...날짜];
      copy2.unshift(today);
      날짜변경(copy2);
    }
  }

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
                <p>{날짜[i]}</p>
                <button onClick={()=>{
                  /* let deleteTitle = [...글제목];
                  deleteTitle[i] = "";
                  글제목변경(deleteTitle);
                  console.log(deleteTitle); --> 글제목만 지워짐 */
                  
                  let deleteTitle = [...글제목];
                  deleteTitle.splice(i,1); // 위 주석처럼 공백을 둘 것이 아닌 splice 함수를 사용해 배열에서 아이템을 지워야함. (i,1) 변수와 숫자를 적으면 됨
                  글제목변경(deleteTitle);
                }}>삭제</button>
              </div>
            )
          })
        }

        <input onChange={(e)=>{
          입력변경(e.target.value);
          }}></input>
          {/* <button onClick={()=>{
            // 글제목변경(글제목.concat(입력값)); // state변경함수(기존state.concat(입력state)); > concat 함수 : 배열에 추가하는 함수
            // 글제목변경([...글제목, 입력값]); state 먼저 카피 > 카피에 입력값 > state변경함수 적용

            // 내가한 숙제에선 concat 함수를 썼음 내거는 기존 array["남자코트추천",...] 에서 뒤에 하나씩 생성 됨, 그러나 밑에 unshift는 array[...,"남자코트추천",~~] 배열 앞쪽에 하나씩 추가됨

            // let copy =  [...글제목];
            // copy.unshift(입력값); 
            // 글제목변경(copy);
            
            // if(입력값){
            //   글제목변경(글제목.concat(입력값));
            // }else {
            //   // return; 리턴만 넣으면 아무 실행안됨
            //   alert("입력") // 기능작동 확인용
            //   --> 이렇게 하면 concat을 이용한건 되는데, unshift는 또 안됨..
            // }
            console.log(글제목);
          }}>글발행</button> */}

          <button onClick={addPost}>글발행</button>
          {/* 글발행 버튼 은 위에 함수로 빼두었음 */}

        {modal == true ? <Modal 글제목={글제목} 글제목변경 = {글제목변경} modalTitle={modalTitle}/> : null}
        
        <Modal2></Modal2>
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

class Modal2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : 'Kim',
      age : 20,
    }
  }
  render(){
    return(
      <div>
        안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
