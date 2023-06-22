import React, { Component } from "react";

// 전개 연산자 (...)
// 배열이나 객체를 펼치는(전개하는) 연산자
class SpreadOperater extends Component{

    constructor(props){
        super(props);
        this.state = {}; 
    }

    componentDidMount(){
        const arr1 = ['a','b'];
        const arr2 = ['c','d'];
        const arr3 = [...arr1, ...arr2];
        
        console.log(arr1);
        console.log(arr2);
        console.log(arr3);

        console.log(...arr1);
        console.log(...arr2);
        console.log(...arr3);

        // 배열 값을 이용햇 변수를 한번에 선언, 초기화
        // sum1 = arr3[0]
        // sum2 = arr3[1]
        // remain = arr3[0], arr3[1]을 제외한 나머지 배열
        const [sum1, sum2, ...remain] = arr3;
        console.log(`sum1 :${sum1}`);
        console.log(`sum2 :${sum2}`);
        console.log(`remain :${remain}`);


        const obj1 = {key1 : 'a', key2 : 'b'};
        const obj2 = {key3 : 'c', key4 : 'd'};
        const obj3 = {...obj1, ...obj2};

        console.log(obj1);
        console.log(obj2);
        console.log(obj3);

        // 객체 값을 이용해 변수를 한번에 선언, 초기화
        // key1 = obj3[key1];
        // key3 = obj3[key3];
        // others = 나머지
        const {key1, key3, ...others} = obj3;
        console.log(key1);
        console.log(key3);
        console.log(others);



    }


    render(){
        return (
            <h2>전개 연산자 예시</h2>
        );
    }
}

export default SpreadOperater;