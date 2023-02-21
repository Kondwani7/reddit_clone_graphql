import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import PostBox from '@/components/PostBox'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Reddit Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {/*PostBox */}
        <PostBox/>
        <div>
          {/*Newsfeed */}
        </div>
      </main>
    </>
  )
}
