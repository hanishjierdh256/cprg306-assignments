"use client";
import {useState} from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
    let [isActiveDecrement, setIsActiveDecrement] = useState(false);
    let [isActiveIncrement, setIsActiveIncrement] = useState(true);


    let increment = () => {
        if(quantity < 20){
            setQuantity(quantity+1);
            setIsActiveDecrement(true);
        }
        if(quantity == 19){
            setIsActiveIncrement(false);
        }
    }

    let decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1);
            setIsActiveIncrement(true);
        }
        if(quantity == 2){
            setIsActiveDecrement(false);
        }
    }
    return(
        <div className="flex bg-gray-400 drop-shadow-2xl rounded w-48 h-12 mx-auto my-4 text-xl">
            <p className="flex-1 my-auto mx-3">{quantity}</p>
            <div className="my-auto mx-2 grid grid-cols-2 gap-2">
                <button 
                    //id="decrementButton"
                    onClick={decrement}
                    className = {` ${isActiveDecrement ? "bg-blue-500 hover:bg-blue-700" : "bg-blue-200" } w-8 h-8 text-white font-bold rounded`}
                    >-
                </button>
                <button 
                    //id="incrementButton"
                    onClick={increment}
                    className = {` ${isActiveIncrement ? "bg-blue-500 hover:bg-blue-700" : "bg-blue-200" } w-8 h-8 text-white font-bold rounded`}
                >+
                </button>
            </div>
        </div>
    );
}