import React,{useState} from "react";
import "./stylesheet.css";
const Login =()=>{
    const[uname,setName]=useState('');
    const[password,setPassword]=useState('');

    return(
        <div id="login">
        <section className="form">
            <div className="Element">
                <label htmlFor="uname">Username</label>
                <input type="text" name="uname" id="uname"
                value={uname} onChange={(e)=>{
                   setName(e.target.value);
                }}></input>
            </div>
            <div className="Element">
                <lable htmlFor="password">Password</lable>
                <input type="text" id="password"
                 value={password} onChange={(e)=>{
                    setPassword(e.target.value);
                }}></input>
            </div>

            <button className='btn'>Login</button>
            
        </section>
        </div>
    );

}
export default Login;