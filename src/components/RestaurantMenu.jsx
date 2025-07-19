import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurant(resId);
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
