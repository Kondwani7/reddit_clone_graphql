import React from 'react'
import Image from 'next/image'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { BsArrowUpRightCircle, BsBell, BsChatLeftText } from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import { TfiAnnouncement } from 'react-icons/tfi'
import { RiCoinsLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiHome } from 'react-icons/hi'
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
        </div>
    )
}

export default Header
