import './App.css';

// 리액트 시작하기(demo)
// import ComponentEx from './components/demo/ComponentEx'
// import LifeCycle from './components/demo/LifeCycle'
// import Es6 from './components/demo/Es6'
// import SpreadOperater from './components/demo/SpreadOperater'
// import ClassPrototype from './components/demo/Class&Prototype'
// import ArrowFunction from './components/demo/ArrowFunction'


import Props from './components/basic/B01_Props';
import PropsDataType from './components/basic/B02_PropsDataType';
import PropsObj from './components/basic/B03_PropsObj';
import PropsRequired from './components/basic/B04_PropsRequired';
import State from './components/basic/B05_State';
import State2 from './components/basic/B06_State2';
import State3 from './components/basic/B07_State3';
import StateLiftingUp from './components/basic/B08_StateLiftingUp';
import PropsDrilling from './components/basic/B09_PropsDrilling';
import UseEffectEx from './components/basic/B10_UseEffect';
import UseContextEx from './components/basic/B11_UseContext';
import UseReducer from './components/basic/B12_UserReducer';
import UseReducer2 from './components/basic/B13_UseReducer2';
import UseCallback from './components/basic/B14_UseCallback';
import UseCallback2 from './components/basic/B15_UseCallback2';
import UseMemo from './components/basic/B16_UseMemo';
import UseRef from './components/basic/B17_UseRef';
import Condition from './components/basic/B18_ConditionalRendering';
import UseContext1 from './components/basic/UseContext1';
import TodoList from './components/basic/TodoList';



function App() {
  return (
    <>
      {/* 리액트 시작하기(demo) */}
      {/* <ComponentEx/> */}
      {/* <LifeCycle prop_value="FromApp.js"/> */}
      {/* <Es6/> */}
      {/* <SpreadOperater/> */}
      {/* <ClassPrototype/> */}
      {/* <ArrowFunction/> */}

      {/* 자식 컴포넌트에서 사용할 값을 속성으로 작성 -> props에 담김 */}
      {/* <Props props_val="이것이 props"/> */}

      {/* 자료형 지정 */}
      {/* <PropsDataType 
              String="react"
              Number={200}
              Boolean={true}
              // Boolean // 값 미작성 시 기본값 true
              Array={[0, 1, 8]}
              ObjectJson={{react:"리액트", twohundred:"200"}}
              Function={console.log("FunctionProps: function!")}
            /> */}


      {/* <PropsObj ObjectJson={{inputName:"홍길동", inputAge:10, inputAddress:"서울시 중구"}} /> */}

      {/* ReactString이 필수 props로 지정되어 있는데 전달 안하면 오류 발생 */}
      {/* <PropsRequired ReactNumber={200}>
        <span>node 전달하기 테스트</span>
      </PropsRequired> */}


      {/* B05_State 예제 */}
      {/* <State test={"test string"} /> */}

      {/* B06_State2 */}
      {/* <State2 /> */}

      {/* B07_State3 */}
      <State3 />

      {/* B08_StateLiftingUp */}
      {/* <StateLiftingUp /> */}

      {/* B09_PropsDrilling */}
      {/* <PropsDrilling /> */}

      {/* B10_UseEffect */}
      {/* <UseEffectEx /> */}

      {/* B11_UseContext */}
      {/* <UseContextEx /> */}

      {/* B12_UserReducer */}
      {/* <UseReducer /> */}

      {/* B13_UserReducer2 */}
      {/* <UseReducer2 /> */}

      {/* B14_UseCallback */}
      {/* <UseCallback /> */}

      {/* B15_UseCallback2 */}
      {/* <UseCallback2 /> */}

      {/* B16_UseMemo */}
      {/* <UseMemo /> */}

      {/* B17_UserRef */}
      {/* <UseRef /> */}

      {/* B18_ConditionalRendering */}
      {/* <Condition /> */}



      {/* <UseContext1></UseContext1> */}
      {/* <hr/> */}


      {/* <TodoList/> */}

      
    </>







  );
}

export default App;
