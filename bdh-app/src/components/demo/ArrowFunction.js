import React, { Component } from 'react';

class ArrowFunction extends Component {

  constructor(props) {
    super(props);
    
    // 컴포넌트 생성 시 state 값 초기화
    this.state = {
      arrowFuc: 'React200',
      num: 3
    };
  }

 
  // render 호출 후 수행
  componentDidMount() {
    Function1(1);

    // componentDidMount() 밖에 작성된 함수를 호출할때는 this를 붙임
    // this == 현재 컴포넌트
    this.Function2(1,1);
    this.Function3();
    this.Function4();
    this.Function5(0,2,3);

    function Function1(num1) {
      // 컴포넌트 바로 하위가 아닌곳에 정의 된 함수에서 this는 아무것도 의미하지 않음
      console.log(this); 
      return console.log(num1+'. Es5 Function');
    }
  }
  


  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(this); // 화살표 함수에서 this는 ArrowFunction 컴포넌트
    console.log(num3+'. Arrow Function : '+this.state.arrowFuc);
  }
  
  Function3() {
     // 컴포넌트 바로 하위에 정의 된 함수에서 this는 ArrowFunction 컴포넌트를 의미
    var this_bind = this; 

    setTimeout(function() {
      // window.setTimeout() 콜백 함수의 this는 window를 나타냄

      console.log(this); // window
      console.log(this_bind); // ArrowFunction 컴포넌트
      console.log(this.state.arrowFuc); // 오류
      console.log(this_bind.state.num+'. Es5 Callback Function noBind : ');
    },100);
  }
  

  Function4() {
    setTimeout(function() {
      console.log('4. Es5 Callback Function Bind : '+this.state.arrowFuc);
    }.bind(this),100);
    // window.setTimeout() 콜백 함수의 this에 컴포넌트 this를 연결
  }
  
  Function5 = (num1, num2, num3) => {
    const num4 =  num1 + num2 + num3;
    setTimeout(() => {

      // 화살표 함수에서 this는 컴포넌트를 의미
      console.log(num4+'. Arrow Callback Function : '+this.state.arrowFuc);
    }, 100);
  }


  render() {
    return (
      <h2>[ THIS IS ArrowFunction ]</h2>
    )
  }
}

export default ArrowFunction;