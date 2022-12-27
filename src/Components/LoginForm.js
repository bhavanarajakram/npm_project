import React ,{useState }from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate  } from 'react-router-dom';
import { login } from '../Actions/auth';

const LoginForm = (props) => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username,setUsername]=useState([])
    const [password,setPassword]=useState([])
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    console.log(isLoggedIn)

    const handleUserName = (e)=>{//e is the argument of an event handler to a certain event, e.target always response dom element
    console.log(e.target.value)
    setUsername(e.target.value)
    }
  
    const handlePassword = (e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submited')
        setLoading(true);
          dispatch(login({username:username, password:password}))
            .then((response) => {
              
              if(response) {
                localStorage.setItem("user",JSON.stringify(response))
              }
            if (isLoggedIn) {
              navigate('/profile');
              }
            })
            .catch((err) => {
                console.log(err.message)
              setLoading(false);
            })
      };
    //   if (isLoggedIn) {
    //     return <Navigate to="/" />;
    //   }
  return (
    <div>
       <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={handleUserName}/><br/>
        <label>password</label>
        <input type="text" value={password} onChange={handlePassword}/><br/>
        <input type="submit" value="Login" onChange={handleUserName} disabled={loading}/>

      </form>
    </div>
    </div>
  )
}

export default LoginForm
