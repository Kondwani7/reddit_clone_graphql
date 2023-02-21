import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { CiImageOn } from 'react-icons/ci'
import { BsLink45Deg } from 'react-icons/bs'
import { useForm } from 'react-hook-form'

type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subreddit: string
}

function PostBox() {
  const { data: session } = useSession()
  const [imageBoxOpen, setImageBoxOpen] = useState(false)

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <form className='mt-6 sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2'>
      <div className='flex items-center space-x-3'>
        {/*Avatar */}
        <Avatar />
        <input
          {...register('postTitle', { required: true })}
          disabled={!session}
          className='flex-1 rounded-md bg-gray-50 p-2 outline-none'
          type='text'
          placeholder={
            session ? 'Create a new post' : 'log in to post'
          }
        />

        <CiImageOn 
          onClick={() => setImageBoxOpen(!imageBoxOpen)} 
          size={25} 
          className={`cursor-pointer text-gray-500 ${
            imageBoxOpen && 'text-blue-300'
          }`}
        />
        <BsLink45Deg size={25} className='text-gray-500 cursor-pointer' />
      </div>
      {/*create post */}
      {watch('postTitle') && (
        <div className='flex flex-col py-2'>
          {/*body*/}
          <div className='flex items-center px-2'>
            <p className='min-w-[90px]'>Body:</p>
            <input
              className='m-2 flex-1 bg-blue-50 p-2 outline-none'
              {...register('postBody')}
              type='text'
              placeholder='Text (optional)'
            />
          </div>
          {/*subreddit*/}
          <div className='flex items-center px-2'>
            <p className='min-w-[90px]'>Subdreddit:</p>
            <input
              className='m-2 flex-1 bg-blue-50 p-2 outline-none'
              {...register('subreddit')}
              type='text'
              placeholder='i.e sports'
            />
          </div>
          {/*image url*/}
          {imageBoxOpen && (
            <div className='flex items-center px-2'>
              <p className='min-w-[90px]'>Image URL:</p>
              <input
                className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                {...register('postImage')}
                type='text'
                placeholder='Optional...'
              />
            </div>
          )}
          {/*handling errors*/}
          {Object.keys(errors).length > 0 && (
            <div className='space-y-2 p-2 text-red-500'>
              {errors.postTitle?.type === 'required' && (
                <p>A Post title is required</p>
              )}

              {errors.subreddit?.type === 'required' && (
                <p>A Subreddit is required</p>
              )}
            </div>
          )}
        </div>
      )}
    </form>
  )
}

export default PostBox
