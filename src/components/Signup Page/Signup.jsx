import { Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from '../../hooks/useAuthContext'
export default function Signup(){

    const [signupData,setSignupData]=useState({email:'',password:''});
    const [error, setError]=useState(null);
    const { dispatch } = useAuthContext();
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(signupData);
        setSignupData((prevFormData)=>{
            return { ...prevFormData, [name]:value,}

    });
    };

    const handleClick=async (e)=>{
        if (!signupData.email || !signupData.password) {
            setError('Please fill in both email and password fields.');
            return;
        }
        console.log(signupData);         
        e.preventDefault();
           
        axios.post('http://localhost:8002/signup', signupData)
        .then((response) => {               
            setSignupData({email:'',password:''});
            const json=response.data;
            if (response.status === 200) {
                        
                localStorage.setItem('user', JSON.stringify(json))
        
                        
                dispatch({type: 'LOGIN', payload: json})
                console.log(response.data.token);
                navigate("/");
            }
            else{
                console.error('Request failed');
                setError(response.data.error)
                
            }                
        })

            
        .catch((error) => {
            console.error(error);
            setError(error.response.data.error);
        });

    };

   

    return(
        <div className="flex flex-col items-center justify-center">

        <div className="relative mt-40 flex flex-col h-[300px] w-[500px] shadow-xl items-center rouned-md">
            <div className="mt-5 font-roboto text-xl">Enter your details</div>
            {error &&
            <div className="text-red-400 mt-2">{error}</div>}
            <input type='text' onChange={handleChange} value={signupData.email} name="email" placeholder="Enter Email" className="w-80 outline-none border-b-black border-b-[1px] mt-3"></input>
            <input type='password' onChange={handleChange} value={signupData.password} name="password" placeholder='Enter Password' className="w-80 mt-10 outline-none border-b-black border-b-[1px]"></input>
            <div className="mt-5 font-roboto text-sm text-slate-700">Already a User? <Link to='/login' className="underline hover:text-black">Login</Link></div>
            <button onClick={handleClick} className="bg-black text-white w-20 rounded-sm hover:scale-110 mt-8 font-jost" >Register</button>
        </div>
       

        </div>
    )
}