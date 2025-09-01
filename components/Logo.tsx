import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <Image src="/rclogo.png" alt="logo" width={100} height={50} className='h-[50px] w-[auto]' />
    </div>
  )
}

export default Logo