
import { addItem } from "../utils/cartSlice";
import { IMAGE_URL } from "../utils/constants";
import {useDispatch} from "react-redux";


const ItemList = ({items}) => {

    const dispatch= useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return <div>
            
                {items.map( (item)  => <div key={item.card.info.id} 
                
                className="p-2 m-2 border-b-4  border-gray-200 shadow-lg text-left  flex justify-between" >
                    <div className="w-9/12 ">
                    <div className="py-2">
                        <span >{item.card.info.name}</span>
                        <span> - ₹ { item.card.info.price ?  item.card.info.price /100 :item.card.info.defaultPrice }  </span>
                    </div>
                    <span className="text-xs ">{item.card.info.description}</span>
                    </div>
                    <div className="w-3/12 ">
                    <div className="absolute ml-12">

                        <button className="bg-orange-500 text-white p-1 mx-16 rounded-lg shadow-lg"

                            onClick={()=>handleAddItem(item)}>Add+</button>

                    </div>
                    <img src={IMAGE_URL + item.card.info.imageId} 
                    className=" rounded-lg w-full" ></img>
                    </div>
                        
                 </div>)}
            
    </div>
}

export default ItemList;