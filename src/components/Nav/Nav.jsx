import { useRef } from "react";
import CharmSearch from "../../assets/Search";
export default function Nav(){
    const inputRef=useRef();
    const focusInput = () => {
        inputRef.current.focus();
      };
    return (
    <div className="z-10 flex flex-wrap justify-between mr-10 font-roboto text-white h-[60px]">
        <div className="italic flex text-3xl ml-10 cursor-pointer font-bold items-center"><div>Travel</div></div>
        <div className="flex items-center">
                <div className="relative p-3 bg-white/90 rounded-l-[50px] h-[40px] cursor-pointer" onClick={focusInput}><div className="relative bottom-1"><CharmSearch /></div></div>
                <input type='text' className="pl-2 outline-none text-xl font-jost relative h-[40px] w-60 rounded-r-[50px] bg-white/90" ref={inputRef}></input>
        </div>
        <div className="flex justify-around basis-3/5">
            <div className="flex items-center cursor-pointer hover:font-bold text-xl"><div>Discover</div></div>
            <div className="flex items-center cursor-pointer hover:font-bold text-xl"><div>Category</div></div>
            <div className="flex items-center cursor-pointer hover:font-bold text-xl"><div>Blog</div></div>
            <div className="flex items-center cursor-pointer hover:font-bold text-xl"><div>Login</div></div>
        </div>


    </div>
    )
}