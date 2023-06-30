import React, {createContext} from "react";

// <ThemeContext.Provider value={{theme, buttonClickHanlder}}>
// value에 작성된 값들이 

// Context 객체를 생성하여 
// 컴포넌트 트리 전체에서 사용할 객체를 추가
const ThemeContext = createContext({
    theme: '',
    buttonClickHanlder: () => {}
});

export default ThemeContext;