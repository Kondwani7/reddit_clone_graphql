import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'
import {CiImageOn} from 'react-icons/ci'
import {BsLink45Deg} from 'react-icons/bs'
function PostBox() {
    const {data: session} = useSession()
  return (
    <form className='mt-6 sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2'>
      <div className='flex items-center space-x-3'>
        {/*Avatar */}
        <Avatar/>
        <input
            disabled={!session}
            className='flex-1 rounded-md bg-gray-50 p-2 outline-none'
            type='text'
            placeholder={
                session ? 'Create a new post': 'log in to post'
            }
        />

        <CiImageOn size={25} className='cursor pointer text-gray-500'/>
        <BsLink45Deg size={25} className='text-gray-500 cursor pointer'/>
      </div>
    </form>
  )
}

export default PostBox
