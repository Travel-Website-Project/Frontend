import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, AnimatePresence } from "framer-motion"

export default function Explore(){
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const {ref:ref1,inView:elementVisible1} = useInView();
    const {ref:ref2,inView:elementVisible2} = useInView();
    const {ref:ref3,inView:elementVisible3} = useInView();
    const [doneOnce, setDoneOnce]=useState(false);
    const [number,setNumber]=useState(1);


    // const animation4 = useAnimation();
    // const animation5 = useAnimation();
    // const animation6 = useAnimation();

    useEffect(() => {
        // Create an interval that updates the value every 5 seconds
        const intervalId = setInterval(() => {
          setNumber((prevValue) => (prevValue + 1)%3);
        }, 3000); // 5000 milliseconds (5 seconds)
    
        // Clean up the interval when the component unmounts
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    
    
    // useEffect(() => {
    //     if (number === 1) {
    //         animation4.start({
    //             x: '0vw',
    //             opacity: 1,
    //             transition: { duration: 0.5 }
    //         });
    //         animation5.start({ x: 5, opacity: 0 });
    //         animation6.start({ x: '0vw', opacity: 0 });
    //     } else if (number === 2) {
    //         animation4.start({ x: '-100vw', opacity: 0 });
    //         animation5.start({
    //             x: '0vw',
    //             opacity: 1,
    //             transition: { duration: 0.5 }
    //         });
    //         animation6.start({ x: '10vw', opacity: 0 });
    //     } else if (number === 0) {
    //         animation4.start({ x: '10vw', opacity: 0 });
    //         animation5.start({ x: '0', opacity: 0 });
    //         animation6.start({
    //             x: '0vw',
    //             opacity: 1,
    //             transition: { duration: 0.5 }
    //         });
    //     }
    // }, [number, animation4, animation5, animation6]);

    useEffect(()=>{
        if(elementVisible1){

            animation1.start({
                x:'0vw',
                opacity:1,
                transition:{duration:0.5}
            })
        }
        if(!elementVisible1 && !doneOnce){
            setDoneOnce(true);
            animation1.start({x:'-10vw',opacity:0});
        }
    },[elementVisible1,animation1, doneOnce]);

    useEffect(()=>{
        if(elementVisible2){
            animation2.start({
                y:'0vw',
                opacity:1,
                transition:{duration:0.5}
            })
        }
        if(!elementVisible2 && !doneOnce){
            setDoneOnce(true);
            animation2.start({y:'-10vw',opacity:0});
        }
    },[elementVisible2,animation2, doneOnce]);

    useEffect(()=>{
        if(elementVisible3){
            animation3.start({
                x:'0vw',
                opacity:1,
                transition:{duration:0.5}
            })
        }
        if(!elementVisible3 && !doneOnce){
            setDoneOnce(true);
            animation3.start({x:'10vw',opacity:0});
        }
    },[elementVisible3,animation3, doneOnce]);

    const slideShowVariant={
        hidden:{
            opacity:0,
            // x:'100vw'
        },
        visible:{
            opacity:1,
            // x:'0vw',
            transition:{
                duration:2,
            }
        },
        exit:{
            opacity:0,
            // x:'-100vw',
            transition:{
                duration:0
            }
        }
    }




    return(
        <div className="">
         <AnimatePresence initial={false}> 
         {number===1 &&  
        
            <motion.div className="relative flex w-screen h-screen" variants={slideShowVariant} initial='hidden' animate='visible' exit='exit'>
                <div className="flex items-end justify-center basis-1/3 h-full bg-fort bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-white
                cursor-pointer hover:shadow-xl hover:z-10 hover:shadow-white">
                    <motion.div ref={ref1} animate={animation1} className="relative flex flex-col items-center bottom-10">
                        <div>The Land</div>
                        <div>of Maharajas</div>
                        <div>Rajasthan </div>
                    </motion.div>

                </div>
                <div className="flex items-end justify-center basis-1/3 bg-taj bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-black
                cursor-pointer hover:shadow-xl hover:z-10 hover:shadow-white">
                    <motion.div ref={ref2} animate={animation2} className="relative flex flex-col items-center bottom-10">
                        <div>Explore the</div>
                        <div>Taj Mahal</div>
                    </motion.div>
                </div>
                <div className="flex items-end justify-center basis-1/3 bg-beach bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-white
                cursor-pointer hover:shadow-2xl hover:z-10 hover:shadow-white">
                    <motion.div ref={ref3} animate={animation3} className="relative flex flex-col items-center bottom-10">
                        <div>Top 10 Beaches</div>
                        <div>in India</div>
                    </motion.div>
                </div>
            </motion.div>
         }
        </AnimatePresence>
        <AnimatePresence> 

         {number===2 &&  
            <motion.div className="relative flex w-full h-screen" variants={slideShowVariant} initial='hidden' animate='visible' exit='exit'>
                <div className="flex items-end justify-center basis-1/3 h-full bg-varanasi bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-[2.5rem] text-white
                cursor-pointer hover:shadow-xl hover:z-10 hover:shadow-white">
                    <motion.div className="relative flex flex-col items-center bottom-10">
                        <div className="relative top-3">The Spiritual </div>
                        <div>Capital of India</div>
                        
                    </motion.div>

                </div>
                <div className="flex items-end justify-center basis-1/3 bg-hawa bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-[2.5rem] text-white
                cursor-pointer hover:shadow-xl hover:z-10 hover:shadow-white">
                    <motion.div className="relative flex flex-col items-center bottom-10">
                        <div className="relative top-3">The Palace of</div>
                        <div>Winds</div>
                    </motion.div>
                </div>
                <div className="flex items-end justify-center basis-1/3 bg-waterfall bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-[2.5rem] text-white
                cursor-pointer hover:shadow-2xl hover:z-10 hover:shadow-white">
                    <motion.div className="relative flex flex-col items-center bottom-10">
                        <div className="relative top-3">Most Visited </div>
                        <div>Waterfalls in India</div>
                    </motion.div>
                </div>
            </motion.div>
         } 
         </AnimatePresence>
        <AnimatePresence>
        {number===0 &&  
            <motion.div className="relative flex w-full h-screen" variants={slideShowVariant} initial='hidden' animate='visible' exit='exit'>
                <div className="flex items-end justify-center basis-1/3 h-full bg-ladakh bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-[2.5rem] text-white
                cursor-pointer hover:shadow-xl hover:z-10 hover:shadow-white">
                    <motion.div className="relative flex flex-col items-center bottom-10">
                        <div className="relative top-3">The Land of</div>
                        <div>High Passes</div>
                     
                    </motion.div>

                </div>
                <div className="flex items-end justify-center basis-1/3 bg-delhi bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-[2.5rem] text-white
                cursor-pointer hover:shadow-xl hover:z-10 hover:shadow-white">
                    <motion.div className="relative flex flex-col items-center bottom-10">
                        <div className="relative top-3">The Capiral City:</div>
                        <div className="">Delhi</div>
                    </motion.div>
                </div>
                <div className="flex items-end justify-center basis-1/3 bg-trek bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-[2.5rem] text-white
                cursor-pointer hover:shadow-2xl hover:z-10 hover:shadow-white">
                    <motion.div className="relative flex flex-col items-center bottom-10">
                        <div className="relative top-3">Popular Treks</div>
                        <div>in India</div>
                    </motion.div>
                </div>
            </motion.div>
         } 
     </AnimatePresence> 
     
    
    </div>

    )
}