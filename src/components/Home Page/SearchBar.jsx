import CharmSearch from "../../assets/Search";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LocationIcon from "../../assets/LocationIcon";
export default function SearchBar({isNav}){
    const [searchInput, setSearchInput]=useState(null);
    const [searchResponse,setSearchResponse]=useState([]);
    const inputRef=useRef();
    const focusInput = () => {
        inputRef.current.focus();
      };
    const heightClass = isNav? 'h-[40px] ':'h-[60px]';
    const heightClass1 = isNav? 'h-[40px] text-[15px] w-60':'h-[60px] text-xl w-80';


    const searchResponseClass = isNav? 'h-auto w-[18vw] top-[3.5vw]':' top-[10vw] h-auto w-[23vw]';
    const handleChange=async (e)=>{
        setSearchInput(e.target.value);

        e.preventDefault();
        const data={search:e.target.value}
           
        axios.post('http://localhost:8000/search', data)
        .then((response) => {               
            const json=response.data;
            if (response.status === 200) {
                // console.log(json.searchResults);
                setSearchResponse(json.searchResults);
            }
            else{
                // Handle errors here
                console.error('Request failed');
                // setError(response.data.error)
                
            }                
        })
            
        .catch((error) => {
            console.error(error.response.data.error);
           
            
        });
    }


    // const handleClick=(data)=>{

    //    console.log(data);


    // }
    return(
        <div className="flex flex-col items-center mt-3">
        <motion.div className="flex items-center">
            <div className={`relative flex justify-center items-center p-3 bg-white/80 rounded-l-[50px] ${heightClass} cursor-pointer`} onClick={focusInput}><div className="relative"><CharmSearch isNav={isNav}/></div></div>
            <input onChange={handleChange} type='text' className={`pl-2 outline-none font-jost relative ${heightClass1} rounded-r-[50px] bg-white/80 text-black`} ref={inputRef}
            placeholder="Enter the Place"></input>
        </motion.div>
        
        {searchResponse && 
        <div className={`absolute flex flex-col ${searchResponseClass} rounded-sm bg-white/80 z-50`}>
        {searchResponse.map((response,index)=>(
            <Link to={`/${response.placeName}`} key={index}>
            <div className="flex justify-between border-b-2 border-gray-400 cursor-pointer hover:bg-slate-500 p-2">
            
            <div className="flex">
            <div className=""><LocationIcon /></div>
            <div className="relative text-black text-[1.2rem] font-jost bottom-1">{response.placeName}</div>
            </div>  
            
            <div className="text-[1rem] text-slate-700 font-jost">
                {response.stateName}
            </div> 
            
            </div>
            </Link>
        ))}
        </div>
        }
        
        
        </div>
    )
}