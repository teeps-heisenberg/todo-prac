import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [credential,setCredential] = useState();
  const navigate = useNavigate();
  useEffect(()=>{
    let creds = {email:'admin@gmail.com',pass:'admin'};
    localStorage.setItem('userCred',JSON.stringify(creds));
    let tempCred = JSON.parse( localStorage.getItem('userCred'));
    console.log(credential)
    setCredential(tempCred);
  },[]);
  
  return (
    <div className='loginContainer'>
        
        <h1>Todo List App</h1>
        <form onSubmit={(e) =>{
            e.preventDefault();
            if(email === credential.email && pass === credential.pass){
                alert('Login Successful');
                navigate('/todo-list');
            }
            else{
                alert('Login Failed');
            }
        }}>
            <label htmlFor='email'>Email: {email}</label>
            <input type='email' name='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>

            <label htmlFor='pass'>Password: {pass}</label>
            <input type='password' name='pass' value={pass} onChange={(e) => {setPass(e.target.value)}}/>

            <button>Login</button>
        </form>
    </div>
  )
}

export default Login