
import { IoArrowForwardSharp } from "react-icons/io5"


function Header() {
  return (
    <header className="px-16 flex items-center justify-between py-4">
       <p className="text-xl font-bold text-header-text">Application Deadline: 5th November,2026</p>
       <img src="/ai4electionlogo.png" alt="" />
       <button className="flex items-center gap-2 bg-accent-orange text-white font-bold text-lg rounded-md px-6 py-3">Download Concept Document<IoArrowForwardSharp className="w-6 h-6" /></button>
    </header>
  )
}

export default Header