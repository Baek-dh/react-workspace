import React, { Component } from 'react';

class Es6 extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let jsString1 = '자바스크립트'
        let jsString2 = '입니다\n다음줄입니다.'
        console.log(jsString1+' 문자열'+jsString2+'~');
        
        // 백틱(`) 사용법
        let Es6String1 = 'ES6'
        let Es6String2 = '입니다'
        console.log(`${Es6String1} 문자열${Es6String2}!!
    ____다음줄입니다`);
    
        let LongString = "ES6에추가된String함수들입니다.";

        // 문자열 포함 여부 확인 함수
        console.log('startsWith : '+LongString.startsWith("ES6에추"));
        console.log('endsWith : '+LongString.endsWith("함수들입니다."));
        console.log('includes : '+LongString.includes("추가된String"));
      }
    
      render() {
        return (
          <h2>[ THIS IS ES6 STRING ]</h2>
        )
      }
}

export default Es6;