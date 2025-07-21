import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const {cloudinaryImageId, name, cuisines, avgRatingString, sla } = props?.resData?.info;
  return (
    
    <div className="m-4 p-4 rounded-lg bg-slate-100 w-[200px] h-[400px]">
      <div className="res-logo">
        <img className="rounded-lg"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="res-logo"
        />
      </div>
      <div className="res-data">
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <p> {avgRatingString} star</p>
        <p> {sla.deliveryTime} Min</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (ResCard) =>{
  return (props) =>{
      return (<>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >Promoted</label>
        <ResCard {...props}/>
        </>
      )
  }
}

export default ResCard;