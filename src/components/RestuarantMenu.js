
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestuarantMenu = () => {
    

    const {resId} = useParams();



    // custom hook created  
    const resInfo = useRestuarantMenu(resId);


    

    const [showIndex,setShowIndex] = useState(null);
         
    if(resInfo === null ){
        return  
            <Shimmer/>;
    }

    const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
    
    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log("menu",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
         c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("categories",categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg"> {cuisines.join(", ")} - {costForTwoMessage}</p>
            
            {categories.map((category,index)=> (
                <RestuarantCategory 
                  key={category?.card?.card.title}
                  data={category?.card?.card}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => setShowIndex(index)}
                  />
            ))}

      
            
        </div>
    );
}

export default RestuarantMenu;





// <ul>
//                 {itemCards.map( (item) =>
//                     <li key={item.card.info.id} > 
//                             {item.card.info.name} - {" Rs."}
//                             {item.card.info.price/100}
//                     </li> 
//                 )}
//             </ul>