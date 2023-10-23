import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion"

export default function Explore(){
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const {ref:ref1,inView:elementVisible1} = useInView();
    const {ref:ref2,inView:elementVisible2} = useInView();
    const {ref:ref3,inView:elementVisible3} = useInView();


    useEffect(()=>{
        if(elementVisible1){
            animation1.start({
                x:'0vw',
                opacity:1,
                transition:{duration:0.5}
            })
        }
        if(!elementVisible1){
            animation1.start({x:'-10vw',opacity:0});
        }
    },[elementVisible1,animation1]);

    useEffect(()=>{
        if(elementVisible2){
            animation2.start({
                y:'0vw',
                opacity:1,
                transition:{duration:0.5}
            })
        }
        if(!elementVisible2){
            animation2.start({y:'-10vw',opacity:0});
        }
    },[elementVisible2,animation2]);

    useEffect(()=>{
        if(elementVisible3){
            animation3.start({
                x:'0vw',
                opacity:1,
                transition:{duration:0.5}
            })
        }
        if(!elementVisible3){
            animation3.start({x:'10vw',opacity:0});
        }
    },[elementVisible3,animation3]);



    return(
        <div className="flex w-full h-screen">
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
    </div>

    )
}