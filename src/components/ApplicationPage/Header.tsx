
import { IoArrowForwardSharp } from "react-icons/io5"


function Header() {
  return (
    <header className="px-4 md:px-10 grid grid-cols-[70px_auto] md:grid-cols-[auto_auto_auto] py-4 gap-5 md:gap-8">
           <p className="text-base md:text-xl font-bold text-header-text md:self-center col-span-2 md:col-span-1">Application Deadline: 5th November,2026</p>
          
            <img src="/ai4electionlogo.png" alt="" className=" object-contain w-auto h-auto" />
            <button className="flex items-center gap-2 bg-accent-orange  justify-center text-white font-bold text-xs md:text-lg rounded-md px-2 md:px-6 py-3 md:self-center">Download Concept Document<IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6 shrink-0" /></button>
           
         
           
        </header>
  )
}

export default Header