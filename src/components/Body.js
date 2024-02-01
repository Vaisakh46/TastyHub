import RestaurantCard from "./RestaurantCard";

import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body=() => {

    const [ListofRestaurants,setRestauarant]=useState([]);

    const [FileteredRestaurant,setFilteredRestaurant]=useState([]);

    console.log(ListofRestaurants);

    // searching
    const [searchText,setSearch] = useState("");


    // API data fetching from swiggy

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5241391&lng=76.9366376&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json=await data.json();    

        console.log(json);

        // optional chaining -> ?. 
        setRestauarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // copying data 
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
      return (
        <h1>
          Looks like you're offline!! Please check your internet connection;
        </h1>
      );


      
    // shimmer loading page ->
    
    // if(ListofRestaurants.length === 0 ){
    //     return <Shimmer/>;

    // }

    return (
        <div className="body">


            <div className="flex items-center">
            
            <div className="m-4 p-4">

                <input type="text" className="border border-solid border-black " value={searchText} 
                        onChange={
                            (e) =>{
                                setSearch(e.target.value);
                            }
                        }></input>

                        <button className="ml-3 px-3 py-1 bg-green-300 rounded-xl" 
                        onClick= { () => {
                                        const filteredres = ListofRestaurants.filter( (res) =>
                                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                            );
                                            setFilteredRestaurant(filteredres);
                                    }}
                        >Search</button>

            </div>

            

            <div className="m-4 p-4">
                <button className="px-3 py-1 bg-yellow-300 rounded-xl"
                onClick={
                    () => {
                        const filteredlist = ListofRestaurants.filter(
                            (res) => res.info.avgRating > 4.2 );
                            
                            setFilteredRestaurant(filteredlist);
                    }
                }>Top Rated Restuarants</button>
            </div>


            </div>
            

           

            <div className="flex flex-wrap">
                {FileteredRestaurant.map((resturant) => ( 

                   <Link key={resturant.info.id}  to={"/restaurants/" + resturant.info.id}>
                            <RestaurantCard resData={resturant}/>
                   </Link> 
                )) }
                   
            </div>
        </div>
    );
};


export default Body;