import ItemList from "./ItemList";

const MenuCategory = ({ data, showItems , setShowIndex}) => {
    console.log("data",data)
  const handleClick = () => {
    setShowIndex()
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-2 bg-gray-100 shadow-lg p-2">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default MenuCategory;
