import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropDown from "@/components/UserDropDown";




const Header = () => {
    return (
        <header className='sticky top-0 header'>
            <div className='container header-wrapper'>
                <Link href='/'>
                    <Image src='/assets/icons/image.png' alt='logo' height={32} width={140} className='h-12 w-50  cursor-pointer' />
                </Link>
                <nav className='hidden sm:block '>
                  <NavItems />

                </nav>
          <UserDropDown />
            </div>
        </header>
    )
}
export default Header
