import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Packing from "./components/Packing";
import Stats from "./components/Stats";
import { InitalItemsType } from "./types/InitialItems";

function App() {
  // Made the state global as it is used by two sibling components as props

  const [items, setItems] = useState<InitalItemsType[]>([]);

  // Function to add a new item to the list of items
  // It updates the state with the new item while preserving the existing items from Form component

  const handleAddItems = (item: InitalItemsType) => {
    setItems((prevItems) => [...prevItems, item]);
    console.log(items);
  };

  // This is the function responsible for deleting the items it is global and passed down to item component through packing component

  const handleDeleteItem = (id: string) => {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id: string) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };


  const handleClearList = () =>{
    const confirmClear = window.confirm('Are sure ? All you items will be cleared ')


    if(confirmClear) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Packing items={items} onDelete={handleDeleteItem} onToggle={handleToggleItem} onClear = {handleClearList}/>
      <Stats items={items} />
    </div>
  );
}

export default App;
