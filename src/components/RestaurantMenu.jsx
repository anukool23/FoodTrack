import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);
  const info = resInfo?.data?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;
  if (!resInfo) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  // console.log(itemCards)
  let categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl text-center m-4">{name}</h1>
      <h1>{cuisines.join(", ")}</h1>
      {categories.map((category)=>(
      <MenuCategory key={category?.card?.card?.title} data={category?.card?.card}/>
      ))}
      
    </div>
  );
};

export default RestaurantMenu;
