import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";

import {useSelector} from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faCircleInfo,faPaperPlane,faCartShopping,faRightToBracket} from '@fortawesome/free-solid-svg-icons'


const Header = () => { 

    const [btname,setbtname] = useState("Login");

    const cartItems = useSelector((store) => store.cart.items);


    return (
    <div className="flex justify-between bg-orange-400 text-white shadow-lg mt-4 h-25 ">
       
            <img className="w-28 h-25" src={LOGO_URL}></img>

            <h1 className="font-bold text-3xl p-4 m-4">TastyHub</h1>
        
        <div className="flex items-center">
            <ul className="flex p-6 m-4">
                <li className="px-6 font-bold text-xl"><Link to="/">
                <FontAwesomeIcon icon={faHouse} /> Home</Link></li>

                <li className="px-6 font-bold text-xl"><Link to="/about">
                
                <FontAwesomeIcon icon={faCircleInfo} /> About Us</Link></li>


                <li className="px-6 font-bold text-xl"><Link to="/contact">
                <FontAwesomeIcon icon={faPaperPlane} /> Contact Us</Link></li>
                
                <li className="px-6 font-bold text-xl">
                <Link to="/cart"> 
                <FontAwesomeIcon icon={faCartShopping} /> Cart - [{cartItems.length}] </Link> </li>
                <button  className="px-6 font-bold text-xl" onClick={ () => {
                    btname === "Login" ? setbtname("Logout") : setbtname("Login")
                }}>
                    {btname}  <FontAwesomeIcon icon={faRightToBracket} />
                </button>
            </ul>
        </div> 

    </div>
    );
};


export default Header;