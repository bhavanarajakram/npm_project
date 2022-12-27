import axios from "axios";


export const loginform = ({username, password}) => {
  return axios
    .post("https://dummyjson.com/auth/login", {
      username:username,
      password:password,
    })
    .then((response) => {
      console.log(response.data)
      if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      return response.data
      // return Promise.resolve(response.data);
      //promise resolve
      //promise - either resolve it or it will reject
      
    });

            
};

export const logoutform = () => {
  localStorage.removeItem("user");
};


// import React,{useState} from 'react'
// import axios from "axios";

// const Auth = () => {

//   const [username,setUsername]=useState('')
//   const[password,setPassword]=useState('')

//   const handleUserName = (e)=>{//e is the argument of an event handler to a certain event, e.target always response dom element
//   console.log(e.target.value)
//   setUsername(e.target.value)
//   }

//   const handlePassword = (e)=>{
//   console.log(e.target.value)
//   setPassword(e.target.value)
//   }

//   const handleSubmit = (e)=>{
//   e.preventDefault()
//   console.log('submited')
//   axios.post('https://fakestoreapi.com/auth/login', {
//     username:username,
//     password:password,
//   })
  
//   .then((response) => {  ////if success then give response
//     console.log(response.data)
//     if(response.data) {
//       localStorage.setItem("user",JSON.stringify(response.data))
//     }
//   })
//   .catch((err)=>{ //catch error
//     console.log(err)
//     console.log(err.response)
//   })
//     }

  

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input type="text" value={username} onChange={handleUserName}/><br/>
//         <label>password</label>
//         <input type="text" value={password} onChange={handlePassword}/><br/>
//         <input type="submit" value="Login" onChange={handleUserName}/>

//       </form>
//     </div>
//   )
// }

// export default Auth
