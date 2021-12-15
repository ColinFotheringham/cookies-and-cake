import React,{useState} from 'react'
import emailjs from 'emailjs-com'

export const MainCustom = () => {
  const [imageError, setImageError]=useState('');
  const [image, setImage]=useState(null);
  const [Name, setName]=useState('');
  const [Email, setEmail]=useState('');
  const [Message, setMessage]=useState('');

  const [errorMsg, setErrorMsg]=useState('');
  const [successMsg, setSuccessMsg]=useState('');

  const types =['image/jpg','image/jpeg','image/png','image/PNG'];
  const handleProductImg=(e)=>{
      let selectedFile = e.target.files[0];
      if(selectedFile){
          if(selectedFile&&types.includes(selectedFile.type)){
              setImage(selectedFile);
              setImageError('');
          }
          else{
              setImage(null);
              setImageError('please select a valid image file type (png or jpg)')
          }
      }
      else{
          console.log('please select your file');
      }
  }

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ommmyym', 'template_e9j6sf9', e.target, 'user_DG4a9l5ene8hI8UHwKvaU').then(res=>{
        setSuccessMsg('Message Sent');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(()=>{
            setSuccessMsg('');
        },3000)
    }).catch(err=> setErrorMsg(err)
        
);
}



  return (
      <div className='container border' style={{marginTop:"50px",
      width: "55%"}}>
        <img src="Menu-Pictures/cookiesandc.jpg" className="logo mx-auto d-block banner" alt="The logo of cookies and cake" fluid />
         <h1>Custom Order Form</h1>
         {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
      <form className='row' style={{margin:"30px 30px 30px 30px"}} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" placeholder="John Doe" className='form-control'
         onChange={(e)=>setName(e.target.value)} value={Name}/>

        <label>Email</label>
        <input type="email" name="user_email" placeholder="name@example.com" className='form-control'
        onChange={(e)=>setEmail(e.target.value)} value={Email}/>

        <label>Custom Cake Description</label>
        <textarea name="message" rows="4" className='form-control'
        onChange={(e)=>setMessage(e.target.value)} value={Message}/>
        
        <label>Upload Image</label>
        <input type="file" id="file" 
        onChange={handleProductImg}></input>
        

        <input type = "submit" value="Send" className='form-control btn btn-success'
        style={{marginTop:'30px'}}/>
      </form>
      {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
      </div> 
  )
}