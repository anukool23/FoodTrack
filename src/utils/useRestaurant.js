import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurant = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const res = await fetch(MENU_API + resId);
          const data = await res.json();
          setResInfo(data || null);
        } catch (error) {
          console.error("Failed to fetch restaurant info:", error);
          setResInfo(null);
        }
      };

    return resInfo;
  };

export default useRestaurant;
