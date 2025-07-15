import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    foodMenu();
  }, []);

  const foodMenu = async () => {
    try {
      const res = await fetch(MENU_API + resId);
      const data = await res.json();
      setResInfo(data || null);
    } catch (error) {
      console.error("Failed to fetch restaurant info:", error);
      setResInfo(null);
    }
  };
  const info = resInfo?.data?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;
  if (!resInfo) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = info;
  const { itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards)
  return (
    <div className="menu">
      <h1>Hello</h1>
      <h1>{name}</h1>
      <h1>{cuisines.join(", ")}</h1>
      <p>{cloudinaryImageId}</p>
      <p>{costForTwoMessage}</p>
      <ul>{itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}</ul>
    </div>
  );
};

export default RestaurantMenu;
