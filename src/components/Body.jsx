import ResCard from "./ResCard";
import mockData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4180814&lng=77.0506896&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    setList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
      );
    setListOfRestaurants( jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) return <h1>Offline</h1>
  if (list.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const sortedData = list.filter((res) =>
                  res?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setListOfRestaurants(sortedData);
              }
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const sortedData = list.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(sortedData);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = list.filter(
                (res) => res?.info?.avgRating > 4.5
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restuarents
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restuarant) => (
          <Link to={"/restaurants/"+restuarant.info.id} key={restuarant.info.id}><ResCard  resData={restuarant}/></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
