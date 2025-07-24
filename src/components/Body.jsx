import ResCard, { withPromotedLabel } from "./ResCard";
import mockData from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const LabelPromoted = withPromotedLabel(ResCard);
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
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Offline</h1>;
  if (list.length === 0) {
    return <Shimmer />;
}
const {loggedInUser, setUserName} = useContext(UserContext);
  return (
    <div className="body">
      <div className="filter-container">
        <div className="m-4 p-4">
          <input
            type="text"
            placeholder="Search"
            className="border-black-300 border-solid border-2 bg-stone-400"
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
        <div className="filter">
          <label>UserName :</label>
          <input type="text" className="border border-black p-2" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((restuarant) => (
          <Link
            to={"/restaurants/" + restuarant.info.id}
            key={restuarant.info.id}
          >
            {restuarant.info.isOpen ? <LabelPromoted resData={restuarant} /> :
            <ResCard resData={restuarant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
