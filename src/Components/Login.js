import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { auth } from '../db/Config'

export const Login = (props) => {

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password).then(() => {
        setSuccess('Login successful! Redirecting to Home Page..')
        setEmail('');
        setPassword('');
        setError('');
        setTimeout(()=>{
          setSuccess('');
          navigate('/');
        },3000)
    }).catch(error => setError(error.message));
}
    


  return (
    <div className='container'>
    <br />
    <br />
    <h1>Login</h1>
    {success&&<>
    <div className='success-msg'>{success}</div>
    <br/>
    </>}
    <form autoComplete="off" className='form-group' onSubmit = {handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" className='form-control' required
        onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <br />
        <label>Password</label>
        <input type="password" className='form-control' required
        onChange={(e)=> setPassword(e.target.value)} value={password}/>
        <br />
        <div className = 'btn-box'>
        <span>Don't have an account? Sign up
                <Link to='/Signup' className='link'> Here</Link></span>
        <button type="submit" className='btn btn-success btn-md'>LOGIN</button>
        </div>
    </form>
    {error&&<>
    <div className='error-msg'>{error}</div>
    <br/>
    </>}
</div>
  );
}


export default Login;
