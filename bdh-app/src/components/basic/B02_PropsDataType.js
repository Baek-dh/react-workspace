import React from 'react'

// 리액트 기본 내장 패키지 prop-types(데이터 유효성 검사 + 경고 출력)
import datatype from 'prop-types';

function PropsDataType(props) {
    let {
        String, Number, Boolean, Array, ObjectJson, Function
    } = props;

    return (
        <div style={{ padding: "0px" }}>
            <p>StringProps: {String}</p>
            <p>NumberProps: {Number}</p>
            <span>BooleanProps: {Boolean.toString()}</span>
            <p>ArrayProps: {Array.toString()}</p>
            <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps: {Function}</p>
        </div>

    );
}

PropsDataType.propTypes = {
    String: datatype.string,
   // String: datatype.number, // string 타입을 number라고 적으면 경고 발생 확인 가능
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
  }

export default PropsDataType; // PropsDataType 라는 컴포넌트를 내보내겠다는 의미