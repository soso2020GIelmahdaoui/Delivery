'use client'
import {Avatar,Dropdown,DropdownItem,DropdownMenu,DropdownTrigger} from '@nextui-org/react'
import { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import AuthScreen from "../screens/AuthScreen";



const ProfileDropDown = () => {
  const [signedIn,setsignedIn]=useState(false)
  const [open,setOpen]=useState(false)
  return (
    <div className='flex items-center gap-4'>
     {
      signedIn ? ( <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar 
          as="button"
          className="transition-transform"
          src='https://avatars.githubusercontent.com/u/100682662?v=4'
          />
        </DropdownTrigger>
        <DropdownMenu aria-label='Profile Actions' variant='flat'>
          <DropdownItem key="profile" className='h-14 gap-2'>
           <p className='font-semibold text-white'>Signed in as </p>
            <p className='font-semibold text-white'>support@gmail.com</p>
          </DropdownItem>
          <DropdownItem key="settings" className='text-white'>
            My Profile
          </DropdownItem>
          <DropdownItem key="all_orders" className='text-white'>
           All Orders
          </DropdownItem>
          <DropdownItem key="team_settings" className='text-white'>
            Apply for seller account
          </DropdownItem>
          <DropdownItem key="logout" color='danger' className='text-white'>
            Logout
          </DropdownItem>
        </DropdownMenu>
     
      </Dropdown>):(
        
          <CgProfile className='text-3xl cursor-pointer  bg-white'
          onClick={()=>setOpen(!open)}
          />
        
           
        
      )}
      {
        open && <AuthScreen />
      }
      
    </div>
  )
}

export default ProfileDropDown
