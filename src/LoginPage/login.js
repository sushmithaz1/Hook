import React,{useState} from 'react';
import "./stylesheet.css";
import history from '../history';


const Login =()=>{
    const[person,setPerson]=useState({name:'',email:'',password:''});
    const [Nameerror,setNameError]=useState('');
    const [Emailerror,setEmailError]=useState('');
    const [Passworderror,setPasswordError]=useState('');

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPerson({...person,[name]:value});
    };


    const handleSubmit=()=>{
        const isValid=validate();
        if(isValid){
            setNameError('');
            setEmailError('');
            setPasswordError('');
            history.push('/upload');
        }  
    }
const validate=()=>
{
    if(!person.name){
        setNameError("Please Enter Name");
        return false;
    }
    if(!person.email){
        setEmailError("Please Enter email");
        return false;
    }
    if(!person.password){
        setPasswordError("Please Enter password");
        return false;
    }
    return true;
}

    return(
        <div id="login">
        <section className="form">
            <div className="Element">
                <label htmlFor="name">Username</label>
                <input type="text" name="name" 
                id="name"
                value={person.name}
                 onChange={handleChange}></input>
                {{Nameerror}?<p style={{fontSize:'10px',color:'red'}}>{Nameerror}</p>:null}
            </div>

            <div className="Element">
                <lable htmlFor="email">Email</lable>
                <input type="email" 
                name="email"
                id="email"
                 value={person.email}
                  onChange={handleChange}></input>
             {{Emailerror}?<p style={{fontSize:'10px',color:'red'}}>{Emailerror}</p>:null}
            </div>
         
            <div className="Element">
                <lable htmlFor="password">Password</lable>
                <input type="password"
                name="password"
                 id="password"
                 value={person.password}
                  onChange={handleChange}></input>
                {{Passworderror}?<p style={{fontSize:'10px',color:'red'}}>{Passworderror}</p>:null}
            </div>

            <button className='btn'  onClick={(e)=>{handleSubmit(e)} } >Login</button>

        </section>
        </div>
    );

}
export default Login;