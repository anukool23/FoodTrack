import ResCard from "./ResCard";
import mockData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect (()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
      // const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4180814&lng=77.0506896&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4180814&lng=77.0506896&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const jsonData = await data.json();
      setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    }
      if(listOfRestaurants.length === 0){
        return <Shimmer/>
      }
  return (
    <div className="body">
      <div className="search"></div>
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.5);
          setListOfRestaurants(filteredList);
        }}>Top Rated Restuarents</button>
      </div>
      <div className="res-container">

        {listOfRestaurants.map((restuarant) => (
          <ResCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
