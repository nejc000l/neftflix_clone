import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {auth} from './firebase'
import { useDispatch,useSelector } from "react-redux";
import {login,logout,selectUser} from './features/userSlice'
import ProfileScreen from "./screens/ProfileScreen";
function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
        if (userAuth){
            //Logged in
            console.log(userAuth);
            dispatch(
              login({
              uid:userAuth.uid, 
              email:userAuth.email,
            })
           )
        }else{
            //LOgGED out
            dispatch(logout())
        }
      })
  
    return unsubscribe

},[dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />} />

          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
