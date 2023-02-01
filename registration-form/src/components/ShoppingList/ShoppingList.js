import { useState } from "react";

const ShoppingList = () => {
    const [ itemName, setItemName ] = useState("");
    const [ quantity, setQuantity ] = useState(1);
    const [ items, setItems ] = useState( [] );

    const handleSubmit = (event) => {
        event.preventDefault();
        setItems((prevItems) => [...prevItems, {itemName, quantity}])
    };

  return (
    <div className="app">
        <form onSubmit={handleSubmit}>
            <div>
                <label>Produkto pavadinimas</label>
                <input type='text' value={itemName} onChange={(event) => setItemName(event.target.value)}/>
                <label>Produkto kiekis</label>
                <input type='number' value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
                <button>Pridėti prekę</button>
            </div>
            <ol>
                {items.map(item => <li key={item.itemName}>{item.quantity} x {item.itemName}</li>)}
            </ol>
        </form>
    </div>
  )
}

export default ShoppingList;