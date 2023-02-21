import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
function Avatar() {
  const {data: session} = useSession()
  return (
    <div className='relative rounded-full bordder-gray-300 bg-white'>
      <Image
        width={41}
        height={41}
        src="/img/profile_image2.png"
        alt="profile image"
      />
    </div>
  )
}

export default Avatar
