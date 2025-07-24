import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }
      if (!Array.isArray(items)) {
    return <div className="text-red-500 text-left m-2">No items found.</div>;}
  
  console.log(items);
  return (
    <div>
      {" "}
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2">
            <div className="text-left">{item?.card?.info?.name}</div>
            <div className="text-left">₹ {item?.card?.info?.price/100}</div>
            <p>{item?.card?.info?.description}</p>
            <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 " onClick={()=>handleAddItem(item)}>Add +</button>
             </div>
      ))}
    </div>
  );
};

export default ItemList;
