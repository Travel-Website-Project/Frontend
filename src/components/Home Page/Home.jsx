import SearchBar from "./SearchBar";
import { useInView } from 'react-intersection-observer';
import Nav from "../Nav/Nav";
import Explore from "./Explore";
import { motion } from "framer-motion";

export default function Home(){
    const animateVariant={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                duration:0.5
            }
        }
    }
    const {ref:myRef, inView:elementVisible}=useInView();
    

    return(
        <div className="flex flex-col">
        <Nav  elementVisible={elementVisible}/>
      
            <div className="flex items-center justify-center w-full h-screen bg-forest bg-cover bg-no-repeat ">  
                <div className="flex relative items-center justify-center text-white font-roboto text-4xl font-black flex-col">
                    <motion.div variants={animateVariant} initial='hidden' animate='visible'>Lets Discover the</motion.div>
                    <motion.div variants={animateVariant} initial='hidden' animate='visible'>World together</motion.div>
                    
                    <motion.div ref={myRef} variants={animateVariant} initial='hidden' animate='visible'>
                        <SearchBar />
                    </motion.div>
                
                </div>
           
          
            </div>
            
          
            
            <Explore />
            
           
        </div>
    )
}