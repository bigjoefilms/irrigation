import ArroRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'

export const Header = () => {
  return(
<header className='sticky top-0 backdrop-blur-sm z-20'>
  <div className="flex  justify-center items-center py-3 bg-black text-white text-sm gap-3">
    <p className='text-white/60 md:block hidden'>
    Stream line your workflow and boost your productivity
    </p>
   <div className="inline-flex gap-1 items-center">
    <p>Get started </p>
    <ArroRight className = "h-4 w-4 inline-flex justify-center "/>
    </div>
  </div>
  <div className="py-5">
    <div className="container">
      <div className="flex items-center justify-between">
    <Image src = {Logo} alt="Saas Logo" height={40} width={40} />
    <MenuIcon className="h-5 w-5 md:hidden" />
    <nav className='hidden md:flex gap-6 text-black/60 items-center'>
      <a href='#'>About</a>
      <a href='#'>Features</a>
      <a href='#'>Custormers</a>
      <a href='#'>Updates</a>
      <a href='#'>Help</a>
      <a href='/dashboard'>
      <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center tracking-tight'>Get Started</button>
      </a>
    </nav>
    </div>

    </div>
   

  </div>
  </header>
  );
};
