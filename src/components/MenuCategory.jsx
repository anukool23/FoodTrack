import ItemList from "./ItemList"

const MenuCategory = (data) =>{
    console.log(data)
    return(<div>
    <div className="w-6/12 mx-auto my-2 bg-gray-100 shadow-lg p-2">
        <div className="flex justify-between">
            <span className="font-bold">{data?.data?.title} ({data?.data?.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        <ItemList items={data?.data?.itemCards}/>
        </div>
        </div>
    )
}
export default MenuCategory