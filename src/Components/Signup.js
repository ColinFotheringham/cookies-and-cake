import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {auth, fs} from '../db/Config'
import {useNavigate} from 'react-router-dom';

export const Signup = (props) => {

let navigate = useNavigate();


  // defining state
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
   const [error, setError] = useState('');
   const [success, setSuccess] = useState('');

  
  // // signup
  const  handleSignup = (e) => {
      e.preventDefault();
      // console.log(userName, email, password)
      auth.createUserWithEmailAndPassword(email, password).then((credentials)=>{
        console.log(credentials);
        fs.collection('users').doc(credentials.user.uid).set({
          UserName: userName,
          Email: email,
          Password: password
        }).then(() =>{
          setSuccess('Signup was successful! Redirecting to Login Page..');
          setUserName('');
          setEmail('');
          setPassword('');
          setError('');
          setTimeout(()=>{
            setSuccess('');
            navigate('/Login');
          },3000)
        }).catch(error => setError(error.message));
      }).catch((error)=>{
        setError(error.message)
      })
    }

  return (
    <div className='container'>
    <br />
    <br />
    <h1>Sign up</h1>
    {success&&<>
    <div className='success-msg'>{success}</div>
    <br/>
    </>}
    <form autoComplete="off" className='form-group' onSubmit={handleSignup}>
        <label>User Name</label>
        <input type="text" className='form-control' required
        onChange={(e)=> setUserName(e.target.value)} value={userName}/>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" className='form-control' required
        onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <br />
        <label>Password</label>
        <input type="password" className='form-control' required
        onChange={(e)=> setPassword(e.target.value)} value={password}/>
        <br />
        <div className = 'btn-box'>
        <span>Already have an account? Login
                <Link to='/Login' className='link'> Here</Link></span>
        <button type="submit" className='btn btn-success btn-md'>SIGN UP</button>
        </div>
    </form>
    {error&&<>
    <div className='error-msg'>{error}</div>
    <br/>
    </>}
</div>
  );
}
export default Signup;
