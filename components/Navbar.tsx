import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
     <Link href='/' className='flex items-center gap-4'>
      <Image src='/FG.png' alt='logo' width={28} height={28} />
      <p className='text-bold'>
      <span className='text-violet-500 font-bold text-[24px]' >Flexa</span>
      <span className='text-white font-bold text-[24px]'>gram</span>
      </p>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
      <button className='btn_green rounded-full font-bold'>
        <Link href="https://flexagram.vercel.app">       
        <span className="flex items-center">
          <img src="/user.svg" alt="Play icon" className="mr-2" /> {/* Assuming play.svg is in the public folder */}
          Join us
        </span>
          </Link>
        </button>
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar