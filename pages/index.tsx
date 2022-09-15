import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function index() {
  
  const [emailFocus, setEmailFocus] = useState<Boolean>(false)
  const [passwordFocus, setPasswordFocus] = useState<Boolean>(false)
  const [codeFocus, setCodeFocus] = useState<Boolean>(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')

  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <div className='flex justify-center items-center h-full flex-col'>
        <form className='flex flex-col w-[350px]'>
          <p className='text-left font-semibold text-3xl mb-5'>Регистрация</p>
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

          <div className='relative'>
            <input type="text" id='code' autoComplete='off' className='input mb-0' 
            onFocus={() => setCodeFocus(true)} onBlur={() => setCodeFocus(false)} onChange={(e) => setCode(e.target.value)}/>
            <label htmlFor='code' className={`label absolute text-[#ffffffd7] text-[14px] top-[14px] left-[10px] ${codeFocus || code? 'animate-focusInput' : 'animate-focusInputEnd'}`}>Code</label>
          </div>

          <Link href={'/login'}>
            <button className='btn'>Sign Up</button>
          </Link>
        </form>
      </div>
    </>
  )
}
