import { use, useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data, showItems }) => {
  const handleClick = () => {
    // setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-2 bg-gray-100 shadow-lg p-2">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {data?.data?.title} ({data?.data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.data?.itemCards || []} />}
      </div>
    </div>
  );
};
export default MenuCategory;
