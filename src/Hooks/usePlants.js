import axios from "axios";
import { useEffect, useState } from "react";

const usePlants = () => {
  const [plants, setPlants] = useState([]);
  const [plantsLoading, setPlantsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const fatchPlants=async()=>{
      try{
        setPlantsLoading(true)
        setError(null)
        const respons=await axios("../plants.json")
        setTimeout(()=>{
          setPlants(respons.data)
          setPlantsLoading(false)
        },100)
      }catch(err){
        setError(err.message)
        setPlantsLoading(false)
      }
    }
    fatchPlants()
  },[])
  return [plants,plantsLoading,error];
};

export default usePlants;
