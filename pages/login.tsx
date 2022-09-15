import React, { useState } from 'react'
import Head from 'next/head'


export default function login() {

    const [emailFocus, setEmailFocus] = useState<Boolean>(false)
    const [passwordFocus, setPasswordFocus] = useState<Boolean>(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <>
      <Head>
        <title>Авторизация</title>
      </Head>
      <div className='flex justify-center items-center h-full flex-col'>
        <form className='flex flex-col w-[350px]'>
          <p className='text-left font-semibold text-3xl mb-5'>Авторизация</p>
          <div className='relative'>
            <input type="text" id='email' autoComplete='off' className='input' 
            onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='email' className={`label absolute text-[#ffffffd7] text-[14px] top-[14px] left-[10px] ${emailFocus || email? 'animate-focusInput' : 'animate-focusInputEnd'}`}>E-mail</label>
          </div>

          <div className='relative'>
            <input type="password" id='password' autoComplete='off' className='input' 
            onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor='password' className={`label absolute text-[#ffffffd7] text-[14px] top-[14px] left-[10px] ${passwordFocus || password? 'animate-focusInput' : 'animate-focusInputEnd'}`}>Password</label>
          </div>

          <button className='btn'>Sign In</button>
        </form>
      </div>
    </>
  )
}
