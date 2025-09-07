import React from 'react'
import Image from 'next/image'

const Logo = ({className}:{className?:string}) => {
  return (
    <div>
        <Image
          src="/rclogo.png"
          alt="logo"
          width={100}
          height={50}
          className={`h-[50px] w-auto ${className}`}
        />
    </div>
  )
}

export default Logo