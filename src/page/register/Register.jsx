import React, { useState } from 'react'

import { auth } from '/src/utils/firebase'
import Button from '../../components/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


function Regiser() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [acount, setAcount] = useState(true);

  const handleAcount = () =>{
    setAcount(!acount)
  }
  
 const handleClick = async () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    console.log(userCredential);
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

 }

const handleGoogle = async () => {
const provider = new GoogleAuthProvider(provider);
console.log('rabotaret');

}







  return (
    <div className='  container mx-auto text-center flex-wrap-reverse justify-center items-center bg-white py-14 px-14 border rounded-md'>
      
       {acount ? (
        <div>
          <p className='cursor-pointer text-black'><span className='text-green' >Login</span> |<span  onClick={handleAcount}> Register</span></p>
        <div className='flex justify-center flex-wrap '>
    
            <input className='border rounded-md border-lime-300 my-1 py-1 px-3 mx-1 ml:w-[170px]' type="email" placeholder='Email..' onChange={(e) => setEmail(e.target.value)}/>
            <input className='border rounded-md border-lime-300 my-1 py-1 px-3 mx-1 ml:w-[170px]' type="password" placeholder='Password..' onChange={(e) => setPassword(e.target.value)}/>
        </div>
       <p className='text-white'>Forgot Password?</p>
       <Button className={'xl:ml-[450px]  my-2 xl:px-[129px] ml:ml-[-25px] ml:w-[140px] lg:ml-[225px] lg:w-[200px]'} title={'Login'} onClick={handleClick}/>
        <p className='text-white'>Or login with</p>
        <Button className={'xl:ml-[485px]  italic px-5  text-slate-950 bg-blue-700 border-[0.5px] border-[rgb(65,117,223)]  my-2 ml:w-[160px] ml:ml-[-35px] lg:ml-[225px] lg:w-[200px]'} onClick={handleGoogle} title={'Login with Google'}/>
        <Button className={'xl:ml-[485px]  italic px-5 bg-blue-900 text-slate-950 border-[0.5px] border-[rgb(59,89,153)] my-2 ml:w-[160px] ml:ml-[-35px] lg:ml-[225px] lg:w-[200px]'} title={'Login with Facebook'}/>
        </div>
       ) : (
        <div>
          <p className='cursor-pointer text-black '><span  onClick={handleAcount}>Login</span> | <span className='text-green'> Register</span></p>
        <div className='flex justify-center flex-wrap '>
    
            <input className='border rounded-md border-lime-300 my-1 py-1 px-3 mx-1 ml:ml-[10px] ml:w-[140px]' type="email" placeholder='Email..' onChange={(e) => setEmail(e.target.value)}/>
            <input className='border rounded-md border-lime-300 my-1 py-1 px-3 mx-1 ml:ml-[10px] ml:w-[140px]' type="password" placeholder='Password..' onChange={(e) => setPassword(e.target.value)}/>
        </div>
         <input  className='border rounded-md border-lime-300 my-1 py-1 px-3 mx-1 ml:ml-[-23px] ml:w-[140px] lg:ml-[10px]' type="text" placeholder='userName...' />

      

       <p className='text-white'>Forgot Password?</p>
       <Button className={'xl:ml-[450px]   my-2 xl:px-[129px]  ml:ml-[-25px] ml:w-[140px] lg:ml-[220px] lg:w-[200px]'} title={'Register'} onClick={handleClick}/>
        <p className='text-white'>Or register with</p>
        <Button className={'xl:ml-[485px]   italic px-5 bg-blue-700  text-slate-950 border-[0.5px] border-[rgb(65,117,223)]  my-2 ml:w-[160px] ml:ml-[-35px] lg:ml-[220px] lg:w-[200px]'} onClick={handleGoogle} title={'Login with Google'}/>
        <Button className={'xl:ml-[485px] bg-blue-900 italic px-5  text-slate-950 border-[0.5px] border-[rgb(59,89,153)] my-2 ml:w-[160px] ml:ml-[-35px] lg:ml-[220px] lg:w-[200px]'} title={'Login with Facebook'}/>
        </div>
       )}
    </div>
  )
}

export default Regiser