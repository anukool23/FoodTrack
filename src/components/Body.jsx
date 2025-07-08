import ResCard from "./ResCard";
import mockData from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-container">
        {mockData.map((resturant) => (
            <ResCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;