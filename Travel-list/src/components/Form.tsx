import { useState } from "react";
import { InitalItemsType } from "../types/InitialItems";

type FormPropsTypes = {
  onAddItems :  (item: InitalItemsType) => void
}

function Form({onAddItems}:FormPropsTypes) {

    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)

  
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(!description) return
    
        const newItem:InitalItemsType = {
           id: Date.now().toString(),
           description:description,
           quantity:quantity,
           packed:false
        }

        // function call which adds new item and it is defined in app component

        onAddItems(newItem)

        setDescription('')
        setQuantity(1)

    }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>

      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text"
       placeholder="Item..." 
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
