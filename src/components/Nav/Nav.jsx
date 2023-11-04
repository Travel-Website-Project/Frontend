import SearchBar from "../Home Page/SearchBar"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
export default function Nav({elementVisible}){
    const isNav=true;
    const {user, dispatch}=useAuthContext()

    const animateVariant={
        hidden:{
            opacity:0,
            y:'-10vw'
        },
        visible:{
            opacity:1,
            y:'0vw',
            transition:{
                duration:0.5,
            }
        },
        exit:{
            opacity:0,
            y:'-10vw',
            transition:{
                duration:0.5
            }
        }
    }

    const handleClick=()=>{
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});
    }

    return (
    <div className="z-40 fixed w-full flex flex-wrap justify-between mr-10 font-roboto text-white h-[60px]">
        <div className="italic flex text-5xl ml-10 cursor-pointer font-bold items-center"><div>Travel</div></div>
        <AnimatePresence>
        {!elementVisible &&
            <motion.div variants={animateVariant} initial='hidden' animate='visible' exit='exit' className="text-2xl">
            <SearchBar isNav={isNav} />
            </motion.div>
        }
        </AnimatePresence>
        <div className="flex justify-around basis-3/5">
            <div className="flex items-center cursor-pointer hover:font-bold text-xl hover:scale-110"><div>Discover</div></div>
            <div className="flex items-center cursor-pointer hover:font-bold text-xl hover:scale-110"><div>Category</div></div>
            <div className="flex items-center cursor-pointer hover:font-bold text-xl hover:scale-110"><div>Blog</div></div>
            <div className="flex items-center justify-center">
             {!user && 
                <Link to='/login'>
                <button className="transition h-10 flex items-center justify-center cursor-pointer hover:font-bold text-xl
               hover:bg-white duration-500 hover:shadow-md hover:text-black w-[100px] rounded-2xl">
                 Login</button>
                 </Link>
            }
            {user &&
                <button onClick={handleClick} className="transition h-10 flex items-center justify-center cursor-pointer hover:font-bold text-xl
               hover:bg-white duration-500 hover:shadow-md hover:text-black w-[100px] rounded-2xl">
                 Logout</button>
            }
           </div>
        </div>


    </div>
    )
}