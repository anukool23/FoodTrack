import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const {cloudinaryImageId, name, cuisines, avgRatingString, sla } = props?.resData?.info;
  return (
    
    <div className="res-card">
      <div className="res-logo">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="res-logo"
        />
      </div>
      <div className="res-data">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <p> {avgRatingString} star</p>
        <p> {sla.deliveryTime} Min</p>
      </div>
    </div>
  );
};

export default ResCard;