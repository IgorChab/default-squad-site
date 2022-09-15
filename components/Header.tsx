import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/Default.png'
import {Menu} from '@material-ui/icons'
import {MenuOpen} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
import { useRouter } from 'next/router'

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

    const [openMenu, setOpenMenu] = useState<Boolean>(false)
    const [animationEnd, setAnimationEnd] = useState<Boolean>(false)

    const router = useRouter()

    const animateHandler = () => {
        setAnimationEnd(true)
        setTimeout(() => {
            setOpenMenu(false)
        }, 1000)
    }

  return (
    <>
        <div className='flex gap-10 px-5 bg-stone-800 items-center media-900:justify-between'>
            <Link href={'/'}>
                <Image src={Logo} width={100} height={100} alt={'logo'} className='cursor-pointer'/>
            </Link>
            {router.pathname == '/login' || router.pathname == '/'? 
            ''
            :
            <>
                <nav className='flex gap-6 text-[#84A0EF] media-900:hidden'>
                {navigation.map(elem => (
                    <Link href={elem.href} key={elem.value}>
                        <p className='cursor-pointer hover:text-[#1e46b6]'>{elem.value}</p>
                    </Link>
                ))}
                </nav>
                <div className='media-900:block hidden' onClick={() => {setOpenMenu(true); setAnimationEnd(false)}}>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                </div>
            </>
            }
        </div>
        {openMenu && 
            <>
                <div className={`absolute animate-opacity ${animationEnd && 'animate-opacityEnd'} bg-[#150E14] opacity-70 z-[800] inset-0`} onClick={animateHandler}></div>
                <div className={`absolute w-1/2 mobile-tablet:w-full right-0 h-full bg-[#150E14] z-[1000] pr-5 ${animationEnd? 'mobile-tablet:animate-closeMenuMobile animate-closeMenu' : 'animate-openMenu mobile-tablet:animate-openMenuMobile'}`}>
                    <div className='h-[100px] flex items-center justify-end' onClick={animateHandler}>
                        <IconButton>
                            <MenuOpen/>
                        </IconButton>
                    </div>
                    <div className='flex flex-col gap-5 items-center pt-[100px] mobile-tablet:pt-10'>
                        {navigation.map(elem => (
                            <div onClick={() => {setOpenMenu(false)}} key={elem.value}>
                                <Link href={elem.href}>
                                    <p className='text-white cursor-pointer'>{elem.value}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        }
    </>
  )
}
