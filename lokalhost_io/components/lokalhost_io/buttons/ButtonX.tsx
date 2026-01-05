import React from 'react'
import { PiTerminalFill } from "react-icons/pi";

function ButtonX() {
  return (
    <div>
      <button className='relative cursor-pointer font-sans font-medium px-10 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-3 '><span className="text-2xl"><PiTerminalFill /></span>Lokalhost.io</button>
    </div>
  )
}

export default ButtonX
