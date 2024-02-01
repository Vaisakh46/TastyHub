import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const dispatch = useDispatch();
    const handleClearCart = () => {
            dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="text-center m-4 p-4  ">
                <h1 className="font-bold text-2xl mb-4">Cart</h1>
                <div className="w-6/12 m-auto  font-bold  bg-gray-100 h-auto rounded-lg">
                <button className=" p-2 bg-black text-white rounded-xl ml-96 mb-2" 
                
                    onClick={handleClearCart}
                >
                
                Clear Cart</button>
                {cartItems.length === 0 && (
                    <h1 className="m-2 p-2 font-bold text-lg">Your Cart is empty . Please Add Items to View !!</h1>)}
                <ItemList items={cartItems}/>
                </div>
                
                
        </div>
    );
}


export default Cart;