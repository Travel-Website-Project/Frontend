import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuthContext } from "../../hooks/useAuthContext";
export default function Login(){

    const [loginData,setLoginData]=useState({email:'',password:''});
    const [error,setError]=useState(null);
    const {dispatch}=useAuthContext();
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        // console.log(formData);
        setLoginData((prevFormData)=>{
            return { ...prevFormData, [name]:value,}
        });
    }


    const handleClick=async (e)=>{
        if (!loginData.email || !loginData.password) {
            setError('Please fill in both email and password fields.');
            return;
        }
        console.log(loginData);         
        e.preventDefault();
           
        axios.post('http://localhost:8002/login', loginData)
        .then((response) => {               
            setLoginData({email:'',password:''});
            const json=response.data;
            if (response.status === 200) {
                        
                localStorage.setItem('user', JSON.stringify(json))                       
                dispatch({type: 'LOGIN', payload: json})
                console.log(response.data.token);
                navigate("/");
            }
            else{
                // Handle errors here
                console.error('Request failed');
                setError(response.data.error)
                
            }                
        })
            
        .catch((error) => {
            console.error(error.response.data.error);
           
            setError(error.response.data.error);
            
        });

    };

    return(
        <div className="flex flex-col items-center justify-center">

        <div className="relative mt-40 flex flex-col h-[300px] w-[500px] shadow-xl items-center rouned-md">
            <div className="mt-5 font-roboto text-xl">Enter your details</div>
            {error &&
            <div className="mt-2 text-red-500">{error}</div>}
            <input type='text' onChange={handleChange} value={loginData.email} name="email" placeholder="Enter Email" className="w-80 outline-none border-b-black border-b-[1px] mt-2"></input>
            <input type='password' onChange={handleChange} value={loginData.password} name="password" placeholder='Enter Password' className="w-80 mt-10 outline-none border-b-black border-b-[1px]"></input>
            <div className="mt-5 font-roboto text-sm text-slate-700">New User? <Link to='/signup' className="underline hover:text-black">Signup</Link></div>
            <button onClick={handleClick} className="bg-black text-white w-20 rounded-sm hover:scale-110 mt-8 font-jost" >Login</button>
        </div>
       

        </div>
    )
}