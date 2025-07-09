import ResCard from "./ResCard";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [resList, setResList] = useState(mockData);
  return (
    <div className="body-container">
      <div className="search">
        <button onClick={()=>{
            setResList(resList.filter((restuarant)=>{
            return restuarant.info.avgRating > 4.5}))
        }}>Top rated Restaurants</button>
      </div>
      <div className="res-container">

        {resList.map((restuarant) => (
          <ResCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
