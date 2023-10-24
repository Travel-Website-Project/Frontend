import CharmSearch from "../../assets/Search";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function SearchBar({isNav}){
    const inputRef=useRef();
    const focusInput = () => {
        inputRef.current.focus();
      };
    const heightClass = isNav? 'h-[50px] ':'h-[60px]';
    const heightClass1 = isNav? 'h-[50px] text-[15px] w-60':'h-[60px] text-xl w-80';

    return(
        <motion.div className="flex items-center mt-3">
            <div className={`relative flex justify-center items-center p-3 bg-white/80 rounded-l-[50px] ${heightClass} cursor-pointer`} onClick={focusInput}><div className="relative"><CharmSearch isNav={isNav}/></div></div>
            <input type='text' className={`pl-2 outline-none font-jost relative ${heightClass1} rounded-r-[50px] bg-white/80 text-black`} ref={inputRef}
            placeholder="Enter the Place you want to Visit"></input>
        </motion.div>
    )
}