import React from "react";

// <ThemeContext.Provider value={{theme, buttonClickHanlder}}>
// value에 작성된 값들이 
// React.createContext
const ThemeContext = React.createContext({
    theme: '',
    buttonClickHanlder: () => {}
});

export default ThemeContext;