import React, { useState, useReducer } from 'react';


const reducer = (state, action) => {


    switch(action.type){
        case 'bg':
            return { bgColor : action.payload, fontColor : state.fontColor };
        case 'font':
            return { bgColor : state.bgColor, fontColor : action.payload };
        default : 
            return { error : '에러'};
    }
}



const UseReducer2 = () => {

    // useReducer
    const [state, dispatcher] = useReducer(reducer, {bgColor : 'white', fontColor : 'black'});


    const [inputText, setInputText] = useState('원하는 글을 입력해주세요');

    const inputTextChangeHandler = (e) => {
        setInputText(e.target.value);
    }

    return (
        <>
            {/* useRducer */}
            <h3>배경색 변경</h3>
            <label><input type="radio" name="bg-color" onChange={()=>{dispatcher({type:'bg', payload:'white'})}}/> white </label>
            <label><input type="radio" name="bg-color" onChange={()=>{dispatcher({type:'bg', payload:'red'})}}/> red </label>
            <label><input type="radio" name="bg-color" onChange={()=>{dispatcher({type:'bg', payload:'yellow'})}}/> yellow </label>
            <label><input type="radio" name="bg-color" onChange={()=>{dispatcher({type:'bg', payload:'green'})}}/> green </label>

            <h3>글자색 변경</h3>
            <label><input type="radio" name="font-color" onChange={()=>{dispatcher({type:'font', payload:'black'})}}/> balck </label>
            <label><input type="radio" name="font-color" onChange={()=>{dispatcher({type:'font', payload:'red'})}}/> red </label>
            <label><input type="radio" name="font-color" onChange={()=>{dispatcher({type:'font', payload:'blue'})}}/> blue </label>
            <label><input type="radio" name="font-color" onChange={()=>{dispatcher({type:'font', payload:'white'})}}/> white </label>

            {/* useState */}
            <h3>글자 변경</h3>
            <input type="text" onChange={inputTextChangeHandler} value={inputText}/>

            <div className='reducer-box' style={{backgroundColor:state.bgColor, color:state.fontColor}}> 
                <span>{inputText}</span> 
            </div>
        </>
    );

}

export default UseReducer2;