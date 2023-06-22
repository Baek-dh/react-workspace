import './App.css';

 // 리액트 시작하기(demo)
// import ComponentEx from './components/demo/ComponentEx'
// import LifeCycle from './components/demo/LifeCycle'
// import Es6 from './components/demo/Es6'
// import SpreadOperater from './components/demo/SpreadOperater'
// import ClassPrototype from './components/demo/Class&Prototype'
// import ArrowFunction from './components/demo/ArrowFunction'


import Props from './components/basic/B01_Props'
import PropsDataType from './components/basic/B02_PropsDataType'
import PropsObj from './components/basic/B03_PropsObj'
import PropsRequired from './components/basic/B04_PropsRequired'
import State from './components/basic/B05_State'
import State2 from'./components/basic/B06_State2'
import StateLiftingUp from './components/basic/B07_StateLiftingUp'
import PropsDrilling from './components/basic/B08_PropsDrilling'



function App() {
  return (

    // 리액트 시작하기(demo)
    // <ComponentEx/>
    // <LifeCycle prop_value="FromApp.js"/>
    // <Es6/>
    // <SpreadOperater/>
    // <ClassPrototype/>
    // <ArrowFunction/>

    /* 자식 컴포넌트에서 사용할 값을 속성으로 작성 -> props에 담김 */
    // <Props props_val="이것이 props"/>

    /* 자료형 지정 */
  // <PropsDataType 
  //         String="react"
  //         Number={200}
  //         Boolean={true}
  //         // Boolean // 값 미작성 시 기본값 true
  //         Array={[0, 1, 8]}
  //         ObjectJson={{react:"리액트", twohundred:"200"}}
  //         Function={console.log("FunctionProps: function!")}
  //       />


    // <PropsObj ObjectJson={{inputName:"홍길동", inputAge:10, inputAddress:"서울시 중구"}} />

    // ReactString이 필수 props로 지정되어 있는데 전달 안하면 오류 발생
    // <PropsRequired ReactNumber={200}>
    //   <span>node 전달하기 테스트</span>
    // </PropsRequired>


    /* B05_State 예제 */
    // <State test={"test string"}/>

    /* B06_State2 */
    <State2 />

    // <StateLiftingUp />

    // <PropsDrilling />
    
  );
}

export default App;
