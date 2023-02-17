import React from 'react'
import Image from 'next/image'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { BsArrowUpRightCircle, BsBell, BsChatLeftText } from 'react-icons/bs'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import { TfiAnnouncement } from 'react-icons/tfi'
import { RiCoinsLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiHome } from 'react-icons/hi'
import { signIn } from 'next-auth/react'
function Header() {
    return (
        <div className='flex bg-white px-3 py-2'>
            <div className='-mt-6 relative h-24 w-24 flex-shrink-0 cursor-pointer'>
                <Image
                    objectFit='contain'
                    layout="fill"
                    src="/img/reddit_logo.png"
                    alt="profile image"
                />
            </div>
            <div className='ml-6 -mt-6 flex items-center xl:min-w-[300px]'>
                <HiHome size={25} />
                <p className='text-base font-medium mt-[6px] ml-2 hidden flex-1 lg:inline'>Home</p>
                <BiChevronDown size={25} />
            </div>
            {/*search box */}
            <form className='ml-6 h-12 flex flex-1 items-center space-x-2 rounded-full border-gray-200 bg-gray-100 px-3 py-1'>
                <BiSearch className='text-gray-400' size={25} />
                <input
                    className='flex-1 bg-transparent outline-none'
                    type="text"
                    placeholder='Search Reddit'
                />
                <button type='submit' hidden />
            </form>

            <div className='mx-5 hidden space-x-2 text-gray-500 lg:inline-flex'>
                <BsArrowUpRightCircle className='icon' />
                <RiCoinsLine className='icon' />
                <BsChatLeftText className='icon' />
                <div className="mt-1 h-8 -ml-0.5 w-[1px] bg-gray-600"></div>
                <HiOutlineChatBubbleOvalLeftEllipsis className='icon' />
                <BsBell className='icon' />
                <AiOutlinePlus className='icon' />
                <button
                    className=' flex items-center mt-1 text-gray-900 font-semibold 
                    h-10 py-2 px-4 bg-gray-300 hover:bg-gray-500 rounded-2xl'>
                    <TfiAnnouncement 
                        className='h-8 w-6 lg:w-12 cursor-pointer rounded-sm lg:p-1
                      lg:hover:bg-gray-100'/>
                    <p className='font-normal'>Advertise</p>
                </button>
            </div>
            <div className='ml-5 space-x-2 -mt-7  text-gray-500 flex items-center lg:hidden'>
                <HiOutlineChatBubbleOvalLeftEllipsis className='icon' />
                <BsBell className='icon' />
                <AiOutlinePlus className='icon' />
            </div>
            {/*sign in*/}
            <div onClick={() =>signIn()} className='ml-2 flex'>
                <button 
                    className='items-center mt-1 text-white w-32 font-semibold
                    h-10 py-2 px-4 bg-blue-700 hover:bg-blue-500 rounded-2xl'>
                    Log In
                </button>
            </div>
            {/*sign out*/}
            <div className='hidden ml-8 -mt-6 flex items-center xl:min-w-[200px]'>
                <Image
                    width={41}
                    height={41}
                    src="/img/profile_image2.png"
                    alt="profile image"
                />
                <p className='text-base font-medium mt-[6px] ml-2 hidden flex-1 lg:inline'>Home</p>
                <BiChevronDown size={25} />
            </div>
        </div>
    )
}

export default Header
