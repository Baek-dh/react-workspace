import React, { useState, useContext } from 'react'; // useContext import
import  ThemeContext  from './ThemeContext'; //context가 작성된 js import (ThemeContext라고 부르기로함)

// Context API 
// - React 컴포넌트 트리 전체에서 데이터를 공유할 수 있는 방법을 제공
// - props drilling을 방지할 수 있음.
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