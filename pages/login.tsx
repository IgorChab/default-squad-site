import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import {ErrorOutline} from '@material-ui/icons'

export default function login() {

    const [emailFocus, setEmailFocus] = useState<Boolean>(false)
    const [passwordFocus, setPasswordFocus] = useState<Boolean>(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
  const [startValidation, setStartValidation] = useState<Boolean>(false)

  useEffect(() => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(password.trim().length < 8){
      setError('Пароль долже содержать не меннее 8 символов')
    } else {
        setError('')
    }

    const validEmail = email.toLowerCase().trim().match(emailRegex)

    if(!validEmail){
      setError('Неккоректный email')
    }

  }, [email, password])

  const submitHandler = () => {
    setStartValidation(true)
    if(!error){
      //запрос на сервер и регистрация
    }
  }

  return (
    <>
      <Head>
        <title>Авторизация</title>
      </Head>
      <div className='flex justify-center items-center h-full flex-col'>
        <form className='flex flex-col w-[350px]'>
          <p className='text-left font-semibold text-3xl mb-5'>Авторизация</p>
          {startValidation && error &&
            <div className='text-white bg-red-600 p-[10px] mb-[15px] rounded-md flex items-center justify-between'>
              {error}
              <ErrorOutline/>
            </div>
          }
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

          <button className='btn' type='button' onClick={submitHandler}>Sign In</button>
        </form>
      </div>
    </>
  )
}
