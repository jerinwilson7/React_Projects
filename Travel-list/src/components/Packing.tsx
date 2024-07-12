
import { useState } from "react";
import { InitalItemsType } from "../types/InitialItems"
import Item from "./Item"


type PackingListProps = {
  items: InitalItemsType[];
  onDelete:(id:string)=>void
  onToggle:(id:string)=>void
  onClear:()=>void
};





function Packing({items,onDelete,onToggle,onClear}:PackingListProps) {

  const [sortBy, setSortBy] = useState('input')

  let sortedItems;

  if(sortBy === 'input') sortedItems = items;

  


  if(sortBy === 'description')
     sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.description))


  if(sortBy === 'packed')
    sortedItems = items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
        <ul>
        {sortedItems?.map((item)=>(
            <Item key={item.id} item={item} onDelete = {onDelete} onToggle={onToggle}/>
        ))}
        </ul>
        
        <div className="actions">
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>

          <button onClick={onClear}>CLEAR LIST</button>
        </div>
    </div>
  )
}

export default Packing