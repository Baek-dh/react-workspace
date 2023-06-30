import React, {useState, useContext} from 'react'
import UserContext from './context/UserContext';


const UseContexr = () => {

    const Profile = () => {
        const {user} = useContext(UserContext); 
        // UserContext에 세팅된 값 중 user의 값만 얻어와 변수에 대입

        console.log(user);

        return (
            <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        );
    }


    const [user, setUser] = useState(null);
    

    const handleLogin = () => {
        setUser({name:'Jhon' , email:'jhon@example.com'});
    }

    const handleLogout = () => {
        setUser(null);
    }


    return(
        <div>
            {/* UserContext에 user, handleLogin, handleLogout 추가 */}
            <UserContext.Provider value={ {user, handleLogin, handleLogout} }>
                { user ? (
                    <div>
                        <Profile/>
                        <button onClick={handleLogout}>Logout</button>
                    </div>

                ) :(
                    <div>
                        <button onClick={handleLogin}>Login</button>

                    </div>
                )}
            </UserContext.Provider>
        </div>
    )
}

export default UseContexr;