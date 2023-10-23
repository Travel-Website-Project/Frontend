import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
export default function Home(){
    const divVariant={
        hidden:{
            opacity:0,
            x:'-10vh',
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
            }
        }

    }
    const divVariant1={
        hidden:{
            opacity:0,
            y:'-10vh',
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
            }
        }

    }
    const divVariant2={
        hidden:{
            opacity:0,
            x:'10vh',
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
            }
        }

    }

    return(
        <div className="w-screen h-screen bg-cover flex flex-col">
            <Nav />
            <div className="absolute top-0 flex h-full w-full">
                <div className="flex items-end justify-center basis-1/3 h-full bg-fort bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-white">
                    <motion.div variants={divVariant} initial='hidden' animate='animate' className="relative flex flex-col items-center bottom-10">
                        <div>The Land</div>
                        <div>of Maharajas</div>
                        <div>Rajasthan </div>
                    </motion.div>

                </div>
                <div className="flex items-end justify-center basis-1/3 bg-taj bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-black">
                    <motion.div variants={divVariant1} initial='hidden' animate='animate' className="relative flex flex-col items-center bottom-10">
                        <div>Explore the</div>
                        <div>Taj Mahal</div>
                    </motion.div>
                </div>
                <div className="flex items-end justify-center basis-1/3 bg-beach bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-white">
                    <motion.div variants={divVariant2} initial='hidden' animate='animate' className="relative flex flex-col items-center bottom-10">
                        <div>Top 10 Beaches</div>
                        <div>in India</div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}