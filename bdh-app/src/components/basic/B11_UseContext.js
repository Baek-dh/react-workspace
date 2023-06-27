import React, { useState, useContext } from 'react'; // useContext import
import  ThemeContext  from './ThemeContext'; //context가 작성된 js import (ThemeContext라고 부르기로함)

const ThemeToggleButton = () => {

    const [theme, setTheme] = useState("light"); // theme 기본값을 light로 지정


    const buttonClickHanlder = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    return(
        // context.Provider : 생성한 context를 하위 컴포넌트에 전달(제공)하는 역할
        <ThemeContext.Provider value={{theme, buttonClickHanlder}}>


            {/* App.css에 css 코드 추가 */}
            <button 
                onClick={buttonClickHanlder}
                className={theme === 'light' ? 'light' : 'dark'}
            >
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode' }
            </button>

        </ThemeContext.Provider>
    ); 
    
}

export default ThemeToggleButton;