import React from 'react'
import localFont from "next/font/local"

const customFont = localFont({src: '../public/fonts/MoonLight.otf'})

const Copyright = () => {
  return (
    <div className={customFont.className}>
     <div className="flex flex-row justify-between items-center py-5 bg-main-violet">
        <p className="w-full text-center text-grey-2">Copyright © 2024 Huyenne_Blog</p>
        <div className=""></div>
    </div>
    </div>
   
  )
}

export default Copyright