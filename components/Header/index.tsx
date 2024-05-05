"use client"

import { useEffect, useState } from "react"
import HeaderItem from "./HeaderItem"

function Header() {
  const [menuData, setMenuData] = useState(['Pizza', 'Noodle', 'Salad', 'Snack', 'Combo', 'Drink'])
  const [isMobile, setIsMobile] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window) {
      setIsMobile(window?.innerWidth < 640 ? true : false);
    }
  })

  useEffect(() => {

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  return (
    <header className="bg-[#00974b] text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-[10px] lg:px-8 sm:flex-row flex-col"
      >
        {isMobile && <div className="ham rounded-sm p-2 hover:bg-[#007e3e]" onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen)
        }}>
          {!isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          }
        </div>}
        {((isMobile && isMobileMenuOpen) || (!isMobile)) && <div className="menu  flex sm:flex-row flex-col gap-x-4 font-semibold">
          {menuData.map((item, index) => (<HeaderItem key={index} message={item}></HeaderItem>))}
        </div>}
        <div className="search hidden sm:flex gap-x-2 ">
          <input className="rounded outline-none border-none text-black" />
          <div className="hover:bg-[#007e3e] p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header