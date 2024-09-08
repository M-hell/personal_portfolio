import React, { useState } from 'react';
import Avatars from './Avatar';

function Contact() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [number, setnumber] = useState("");
  let [description, setdescription] = useState("");

  let sendEmail = () => {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: 'sarkarsamrat16112004.1@gmail.com',
      Password: 'F0C673A67D99511807B3A0A67C13080D7206',
      To: 'sarkarsamrat16112004.1@gmail.com',
      From: 'sarkarsamrat16112004.1@gmail.com',
      Subject: "Enquiry on hire me",
      Body: `name- ${name}, email- ${email}, number- ${number}, description- ${description}`
    }).then(
      message => alert(message)
    );
    setname("");
    setemail("");
    setnumber("");
    setdescription("");
  };

  return (
    <div className='flex flex-col items-center justify-start w-full h-auto py-8 dark:bg-gray-800 dark:text-white border-b-4 border-black dark:border-white'>

      <h1 className='my-8 text-xl font-bold text-center'>Connect with me:</h1>

      <div className='flex justify-center items-center flex-wrap gap-6'>
        <a href='https://www.linkedin.com/in/samrat-sarkar-00534b283/' target='_blank' rel="noopener noreferrer"><Avatars newname="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" /></a>
        <a href='https://www.instagram.com/altruistic_adversary/?hl=en' target='_blank' rel="noopener noreferrer"><Avatars newname="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" /></a>
        <a href='mailto:sarkarsamrat16112004@gmail.com' target='_blank' rel="noopener noreferrer"><Avatars newname="https://thumbs.dreamstime.com/b/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-201003176.jpg" /></a>
        <a href="https://wa.me/918145246849" target='_blank' rel="noopener noreferrer"><Avatars newname="https://static.vecteezy.com/system/resources/previews/023/986/631/non_2x/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png" /></a>
        <a href='https://github.com/M-hell' target='_blank' rel="noopener noreferrer"><Avatars newname="https://cdn-icons-png.flaticon.com/512/25/25231.png" con='bg-white' /></a>
      </div>

      <h1 className='my-8 text-xl font-bold text-center'>or</h1>

      <div className='flex flex-col justify-center items-center w-full gap-4 p-5 rounded-xl border-2 border-black dark:border-white max-w-md'>
        <input className='text-black border-2 rounded-lg w-full h-12 px-4 font-bold' type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter your name' />
        <input className='text-black border-2 rounded-lg w-full h-12 px-4 font-bold' type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter your email' />
        <input className='text-black border-2 rounded-lg w-full h-12 px-4 font-bold' type="text" value={number} onChange={(e) => setnumber(e.target.value)} placeholder='Enter your phone number' />
        <input className='text-black border-2 rounded-lg w-full h-12 px-4 font-bold' type="text" value={description} onChange={(e) => setdescription(e.target.value)} placeholder='Enter description' />
        <button onClick={sendEmail} className='border-2 border-black dark:border-white rounded-2xl p-2 w-full hover:bg-red-400 transition-all duration-300'>Submit</button>
      </div>

    </div>
  );
}

export default Contact;
