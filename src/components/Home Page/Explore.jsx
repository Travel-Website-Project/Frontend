import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Slideshow = () => {
  const component=useRef(null);




  useLayoutEffect (()=>{
    let ctx=gsap.context(()=>{
      const t1=gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2});
      const t2=gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2});
      const t3=gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2});

      t1.to('#first',{
        xPercent:'-100',
        duration:1.3,
        delay:2,
      })

      t2.to('#second',{
        xPercent:'-100',
        delay:2,
        duration:1.3
      })
      t3.to('#third',{
        xPercent:'-100',
        delay:2,
        duration:1.3
      })
      t1.set('#first',{
        xPercent:'200',
      })

      t2.to('#second',{
        xPercent:'-200',
        delay:2,
        duration:1.3
      })

      t3.to('#third',{
        xPercent:'-200',
        delay:2,
        duration:1.3
      })
      t1.to('#first',{
        xPercent:'100',
        duration:1.3,
        delay:2,
      })
      t2.set('#second',{
        xPercent:'100',
      })
    //    t3.to('#third',{
    //    xPercent:'-200',
    //    duration:1
    //   })

      // t3.to('#third',{
      //   xPercent:'-300',
      //   delay:2,
      //   duration:1.3
      // })
      // t1.to('#first',{
      //   xPercent:'0',
      //   duration:1.3,
      //   delay:2,
      // })
      // t2.to('#second',{
      //   xPercent:'0',
      //   duration:1.3,
      //   delay:2,
      // })
      // t3.set('#third',{
      //   xPercent:'0',
      // })

      




    });

    return ()=>ctx.revert();

  },[])
  return (
    <div className="flex flex-nowrap overflow-x-hidden" ref={component} id='main'>
    
   
       <motion.div className="relative flex w-[100vw] h-screen z-20 flex-shrink-0" id='first'>
           <div className="flex items-end justify-center basis-1/3 h-full bg-fort bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-white
           cursor-pointer hover:shadow-xl hover:z-10 hover:shadow-white">
               <motion.div className="relative flex flex-col items-center bottom-10">
                   <div>The Land</div>
                   <div>of Maharajas</div>
                   <div>Rajasthan </div>
               </motion.div>

           </div>
           <div className="flex items-end justify-center basis-1/3 bg-taj bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-black
           cursor-pointer hover:shadow-xl hover:z-10 hover:shadow-white">
               <motion.div className="relative flex flex-col items-center bottom-10">
                   <div>Explore the</div>
                   <div>Taj Mahal</div>
               </motion.div>
           </div>
           <div className="flex items-end justify-center basis-1/3 bg-beach bg-[bottom_1rem] bg-cover bg-no-repeat font-roboto font-bold text-5xl text-white
           cursor-pointer hover:shadow-2xl hover:z-10 hover:shadow-white">
               <motion.div className="relative flex flex-col items-center bottom-10">
                   <div>Top 10 Beaches</div>
                   <div>in India</div>
               </motion.div>
           </div>
       </motion.div>
    
    
       <motion.div className="relative flex w-screen h-screen flex-shrink-0" id='second'>
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
    

 
       <motion.div className="relative flex w-screen h-screen flex-shrink-0" id='third'>
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
    



</div>

  )
}
export default Slideshow;