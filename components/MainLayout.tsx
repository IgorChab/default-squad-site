import { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface MainProps{
  children: React.ReactNode
}

export const MainLayaut: FC<MainProps> = ({children}) => {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-full'>
      <Header/>
        <div className='text-white w-full py-5 h-full laptop:px-14 tablet:px-5 mobile:px-2 desctop:px-48'>
          {children}
        </div>
      <Footer/>
    </div>
  )
}

export default MainLayaut
