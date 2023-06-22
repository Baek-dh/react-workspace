import React from 'react'

// props : 부모 컴포넌트가 자식 컴포넌트에 데이더 전달 시 사용하는 객체
// * props는 자식 컴포넌트에서 수정 불가능 *
function Props(props){
    let props_value = props.props_val;

    props_value += ' App.js에서 세팅된 값';

    return (
        <div>{props_value}</div>
    );
}

export default Props;