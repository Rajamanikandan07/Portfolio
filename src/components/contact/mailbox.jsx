import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './mailbox.css'

export const Emailbox= () => {
  const form = useRef();

  const [name,setName] = useState('');
  const [email,setEmail] =useState('');
  const [message,setMessage] =useState('');
  const [success,setSuccsess] = useState ('');
  const [errormsg,setErrormsg] = useState ('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xqfn7ki', 'template_0z9ykxs', form.current, {
        publicKey: 'zGXlAYb0mIUC4L0Ta',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setName('')
          setEmail('')
          setMessage('')
          setSuccsess('Messase was send Successfully...!')
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrormsg('Message not send Successfully..!')
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" placeholder='Your Name ..?' value={name} onChange={(e) => setName(e.target.value)} required/>
      <label>Email</label>
      <input type="email" name="from_email" placeholder='Your Email..?' value={email} onChange={(e) => setEmail(e.target.value)}  required/>
      <label>Message</label>
      <textarea name="message" placeholder='Enter Your Message...' value={message}  onChange={(e) => setMessage(e.target.value)} required/>
      <button type="submit" value="Send" className='send-btn'>Send</button>
      {success == '' ? null: <p className='success-msg'>{success}</p>}
      {errormsg == '' ? null: <p className='serror-msg'>{errormsg}</p>}
    </form>
  );
};