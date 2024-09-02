
import React from 'react'
import styles from '@/utils/style'
import NavItems from '../NavItems'
import ProfileDropDown from '../ProfileDropDown'

function Header() {
  return (
   <header className='w-full  m-auto bg-[#0f1524] '>
   <div className='w-[90%] h-[80px] m-auto flex items-center justify-between '>
    <h1 className={`${styles.logo}`}> 
      Food Delivery
    </h1>
    <NavItems activeItem={0} />
    <ProfileDropDown />
   </div>

   </header>
  )
}


export default Header
