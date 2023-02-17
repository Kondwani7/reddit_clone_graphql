import React from 'react'
import Image from 'next/image'
import {HiOutlineChatBubbleOvalLeftEllipsis} from 'react-icons/hi2'
import {BsArrowUpRightCircle, BsBell, BsChatLeftText} from 'react-icons/bs'
import {BiChevronDown} from 'react-icons/bi'
import {TfiAnnouncement} from 'react-icons/tfi'
import {RiCoinsLine} from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'

function Header() {
  return (
    <div>
      <div className='relative h-[50px] w-20 flex-shrink-0 cursor-pointer'>
        <Image
            objectFit='contain'
            layout="fill"
            src="/img/reddit_logo.png"
            alt="profile image"
        />
      </div>
    </div>
  )
}

export default Header
