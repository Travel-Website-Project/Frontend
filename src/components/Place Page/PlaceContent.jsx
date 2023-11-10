import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Nav from '../Nav/Nav';
export default function PlaceContent(){

    const { placeName } = useParams();

    const [responseFromServer, setResponseFromServer]=useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            // setMinLoader(true);
            // setTimeout(() => {
            //   setMinLoader(false);
            // }, 1500);
    
            // setIsLoading(true);
            console.log(placeName);
            const requestData = { placeName: placeName };
            const response = await axios.post('http://localhost:8000/place', requestData);
    
            if (response.data) {
              setResponseFromServer(response.data.placeData[0]);
              console.log(response.data.placeData[0]);

            } else {
              console.error('Request failed');

            }
    
          } catch (error) {
            console.error('Error:', error);
          }
        }
        fetchData();
      }, [placeName]);

    return(
        <div className="flex flex-col">
            <div>
            <Nav />
            </div>
            <div className="flex justify-center">
            <div className="flex flex-col items-center p-3 shadow-xl mt-40 w-[90vw]">
                <div className="text-black font-bold font-roboto text-2xl mt-2">Summary</div>
                <div>{responseFromServer.placeSummary}</div>

            </div>
            </div>
        </div>
    )
}