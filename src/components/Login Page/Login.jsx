import { useState } from "react";
import { Link } from "react-router-dom"
export default function Login(){

    const [loginData,setLoginData]=useState({Email:'',Password:''});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        // console.log(formData);
        setLoginData((prevFormData)=>{
            return { ...prevFormData, [name]:value,}

    });
    }
    return(
        <div className="flex flex-col items-center justify-center">

        <div className="relative mt-40 flex flex-col h-[18vw] w-[30vw] shadow-xl items-center rouned-md">
            <div className="mt-5 font-roboto text-xl">Enter your details</div>
            <input type='text' onChange={handleChange} value={loginData.Email} name="Email" placeholder="Enter Email" className="w-80 outline-none border-b-black border-b-[1px] mt-7"></input>
            <input type='password' onChange={handleChange} value={loginData.Password} name="Password" placeholder='Enter Password' className="w-80 mt-10 outline-none border-b-black border-b-[1px]"></input>
            <div className="mt-5 font-roboto text-sm text-slate-700">New User? <Link to='/signup' className="underline hover:text-black">Signup</Link></div>
            <button className="bg-black text-white w-20 rounded-sm hover:scale-110 mt-8 font-jost" >Login</button>
        </div>
       

        </div>
    )
}