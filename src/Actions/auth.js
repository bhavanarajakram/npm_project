import { LOGIN_SUCCESS,LOGOUT } from "./types";
// import Auth from "../services/Auth";
import { loginform , logoutform } from "../services/Auth";


export const login = (username, password) => (dispatch3) => {
    return loginform(username, password)
    .then((data) => {  //passed parameter as data// read data
        dispatch3({
          type: LOGIN_SUCCESS,
          payload: { user: data }, //pass data payload : key=user ,data=value
        });
        return data;
        // return Promise.resolve(data);
        //data
      }
    );
  };
  //action me  kuch bhi dispatch krna ho to vo redux thunk k method dispatch provide krvata h
  export const logout = () => (dispatch3) => {
    logoutform();
  
    dispatch3({
      type: LOGOUT,
    });
  };