import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/Default.png'

const navigation = [
    {value: 'Новости', href: '/news'},
    {value: 'Цитаты', href: '/quotes'},
    {value: 'Точки', href: '/places'},
    {value: 'Bubble Top', href: '/top'},
    {value: 'League Top', href: '/top-rating'},
    {value: 'Статистика Wheat', href: '/statistics'},
    {value: 'Курс BBLCN', href: '/bubblecoin'},
]

export const Header: FC = () => {
  return (
    <div className='flex gap-10 px-5 bg-stone-800 items-center'>
        <Link href={'/'}>
            <Image src={Logo} width={100} height={100} alt={'logo'} className='cursor-pointer'/>
        </Link>
        <nav className='flex gap-6 text-[#84A0EF]'>
            {navigation.map(elem => (
                <Link href={elem.href} className="hover:text-[#1e46b6]" key={elem.value}>
                    <p className='hover:text-blue-800 cursor-pointer'>{elem.value}</p>
                </Link>
            ))}
        </nav>
    </div>
  )
}
