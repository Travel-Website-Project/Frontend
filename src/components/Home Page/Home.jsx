import SearchBar from "./SearchBar";
import { useInView } from 'react-intersection-observer';
import Nav from "../Nav/Nav";
import Explore from "./Explore";

export default function Home(){
    const {ref:myRef, inView:elementVisible}=useInView();
    

    return(
        <div className="flex flex-col">
        <Nav  elementVisible={elementVisible}/>
      
            <div className="flex items-center justify-center w-full h-screen bg-forest bg-cover bg-no-repeat ">  
                <div className="flex relative items-center justify-center text-white font-roboto text-4xl font-black flex-col">
                    <div>Lets Discover the</div>
                    <div>World together</div>
                    
                    <div ref={myRef}>
                        <SearchBar />
                    </div>
                
                </div>
           
          
            </div>
            
          
            
            <Explore />
            
           
        </div>
    )
}