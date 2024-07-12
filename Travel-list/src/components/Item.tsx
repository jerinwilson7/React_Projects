import React from "react";
import { InitalItemsType } from "../types/InitialItems";

type ItemPropsType = {
  item: InitalItemsType;
  onDelete:(id:string)=>void
  onToggle:(id:string)=>void

};

const Item:React.FC<ItemPropsType> = ({ item,onDelete,onToggle }) => {

    

  return (
    <div>
      <li>
        <input type="checkbox" checked={item.packed} onChange={(()=>{onToggle(item.id)})}/>
        <span style={item.packed ? {textDecoration:'line-through'}:{}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={()=>onDelete(item.id)}>❌</button>
      </li>
    </div>
  );
}

export default Item;
