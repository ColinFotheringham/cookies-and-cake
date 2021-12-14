import React,{useState} from 'react'

export const MainCustom = () => {
  const [imageError, setImageError]=useState('');
  const [image, setImage]=useState(null);

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

  return (
      <div className='container border' style={{marginTop:"50px",
      width: "55%"}}>
        <img src="Menu-Pictures/cookiesandc.jpg" className="logo mx-auto d-block banner" alt="The logo of cookies and cake" fluid />
         <h1>Custom Order Form</h1>
      <form className='row' style={{margin:"30px 30px 30px 30px"}}>
        <label>Name</label>
        <input type="text" name="name" placeholder="John Doe" className='form-control'/>

        <label>Email</label>
        <input type="email" name="user_email" placeholder="name@example.com" className='form-control'/>

        <label>Custom Cake Description</label>
        <textarea name="message" rows="4" className='form-control'/>
        
        <label>Upload Image</label>
        <input type="file" id="file" 
        onChange={handleProductImg}></input>
        

        <input type = "submit" value="Send" className='form-control btn btn-success'
        style={{marginTop:'30px'}}/>
      </form>
      </div> 
  )
}