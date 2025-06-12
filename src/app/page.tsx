'use client'
import RegisterForm from '../app/register/page'
import LoginForm from '../app/login/page'
import { useState } from 'react';
export default function Home() {
  // const [isLogin, setIsLogin] = useState(true)
  return (
    
      <div className='main-pages-container'>
       <RegisterForm/>
      </div>
   
  );
}
