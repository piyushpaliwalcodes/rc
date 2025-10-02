'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push('/')}
      className='hover:cursor-pointer'
    >
      <Image
        src="/rclogo.png"
        alt="RC Pulses Logo"
        width={100}
        height={50}
        className={`h-[50px] w-auto ${className}`}
        priority={true} // optional: preloads logo for better performance
      />
    </div>
  )
}

export default Logo
