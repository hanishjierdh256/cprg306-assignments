"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    let [isActiveDecrement, setIsActiveDecrement] = useState(false);
    let [isActiveIncrement, setIsActiveIncrement] = useState(true);
    const [category, setCategory] = useState("Produce");

    const handleNameChange = (event) => {
        let name;
    };

    const handleSubmit = (event) => {
        event.PreventDefault();
        item = { name, category, quantity };
        console.log(item);
        alert(
            `You added ${quantity} ${name}${quantity > 1 ? "s" : ""
            } in the ${category} category.`
        );

        // Clear the form
        setName("");
        setQuantity(1);
        setIsActiveDecrement(false);
        setIsActiveIncrement(true);
        setCategory("produce");
    };

    let increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
            setIsActiveDecrement(true);
        }
        if (quantity == 19) {
            setIsActiveIncrement(false);
        }
    };

    let decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setIsActiveIncrement(true);
        }
        if (quantity == 2) {
            setIsActiveDecrement(false);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-1/4 min-w-fit mx-auto my-4 p-4 bg-gray-200 rounded-lg shadow-lg"
        >
            {/* Name */}
            <input
                type="text"
                value={name}
                onChange={(event) => handleNameChange(event)}
                placeholder="Item name"
                className="p-2 my-2 border border-gray-400 rounded"
                required="required"
            />
            {/* Name END*/}

            {/* Quantity  with + and - buttons*/}
            <div className="flex bg-gray-400 drop-shadow-2xl rounded w-48 h-12 mx-auto my-4 text-xl">
                <p className="flex-1 my-auto mx-3">{quantity}</p>
                <div className="my-auto mx-2 grid grid-cols-2 gap-2">
                    <button
                        //id="decrementButton"
                        onClick={decrement}
                        className={` ${isActiveDecrement
                            ? "bg-blue-500 hover:bg-blue-700"
                            : "bg-blue-200"
                            } w-8 h-8 text-white font-bold rounded`}
                    >
                        -
                    </button>
                    <button
                        //id="incrementButton"
                        onClick={increment}
                        className={` ${isActiveIncrement
                            ? "bg-blue-500 hover:bg-blue-700"
                            : "bg-blue-200"
                            } w-8 h-8 text-white font-bold rounded`}
                    >
                        +
                    </button>
                </div>
            </div>
            {/* Quantity  with + and - buttons END*/}

            {/* Category */}
                <select
                    
                />
            {/* Category END */}

            {/* Add Button */}

            {/* Add Button END*/}
        </form>
    );
}
