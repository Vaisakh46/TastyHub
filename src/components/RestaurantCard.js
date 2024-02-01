import { IMAGE_URL } from "../utils/constants";


const RestaurantCard = (props) =>{
    const {resData} =props;

    
    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime}=resData?.info;

    return (
        <div className="m-4 p-4 w-[200px]   h-[380px]  border rounded-lg  items-center shadow-lg">
                <img className="  border rounded-lg h-40 w-45" src={IMAGE_URL+cloudinaryImageId}></img>
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{cuisines.join(" , ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard;