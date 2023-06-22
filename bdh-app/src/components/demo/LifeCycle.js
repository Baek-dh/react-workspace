import React, { Component } from 'react';

// 생명주기 함수 

// react 생명 주기 === 컴포넌트 생성(mount) - 변경(update) - 소멸(unmount)

class LifeCycle extends Component{

    // * 1.constroctor(props)
    // 생성 관련 함수 중 가장 먼저 실행되는 함수
    // 처음 한 번만 호출됨
    // 내부에 사용되는 변수(state)를 선언하고
    // 전달 받은 부모의 값(props)을 초기화 할 때 사용
    constructor(props){
        super(props);
        this.state = {}
        console.log('1. constructor call');
    }


    // 2.getDerivedStateFromProps(props, state)
    // state를 갱신하기 위한 객체를 반환( null 반환 시 갱신 X )
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps call : ' + props.prop_value);
        return {"tmp_state":props.prop_value};
    }


    // * 3.render() 
    // return 되는 html형식의 코드(jsx, js + xml)를 화면에 그려주는 함수
    // 화면이 변경되어야 할 시점에 자동으로 호출됨.
    // ** Component를 상속 받은 하위 클래스에 반드시 있어야 하는 함수**
    render(){
        console.log('3. render call')
        return (
            <h2>[THIS IS RENDER FUNCTION]</h2>
        );
    }

    // * 4.componentDidMount()
    // 생성 관련 함수 중 가장 마지막에 실행되는 함수
    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);

        // state값 변경 -> shouldComponentUpdate(props, state) 실행
        this.setState( {"tmp_state2" : true} );
    }

    // 5. shouldComponentUpdate(props, state)
    // state의 변경을 감지되면 수행
    // return 값이 true일 경우 rander()를 다시 수행
    shouldComponentUpdate(props, state){
        console.log('6. shouldComponentUpdate Call / tem_state2 = ' + state.tmp_state2);
        return state.tmp_state2; // {"tmp_state2" : true}
    }

    // componentDidUpdate(prevProps, prevState, snapshot)
    // 갱신 직후 호출
    // 컴포넌트가 갱신되었을 때 DOM을 조작하기 위하여 이 메서드를 활용하면 좋습
    // 이전과 현재의 props를 비교하
    // componentDidUpdate()에서 setState()를 즉시 호출할 수도 있지만, 위의 예시처럼 조건문으로 감싸지 않으면 무한 반복이 발생할 수 있다는 점에 주의
    // componentDidUpdate()는 shouldComponentUpdate()가 false를 반환하면 호출되지 않습니다.
    // componentDidUpdate(prevProps, prevState) {
    //     // 전형적인 사용 사례 (props 비교를 잊지 마세요)
    //     // if (this.props.userID !== prevProps.userID) {
    //     //     this.fetchData(this.props.userID);
    //     // }
    //     console.log('7. componentDidUpdate call');
    //     console.log(this.props.prop_value);
    //     console.log(prevProps.prop_value);
    // }
}

export default LifeCycle;