import { InitalItemsType } from "../types/InitialItems"

type  StatsPropsType = {
  items:InitalItemsType[]
}


function Stats({items}:StatsPropsType) {

  const itemsPacked= items.filter(item=>item.packed).length
  const packedPercentage = items.length === 0 ? 0 : (itemsPacked / items.length) * 100
  return (
    <footer className="stats">
       <em>
        {packedPercentage === 100 ? 'You got Everything!  🎉 Ready to go ✈️'
        :
     `  💼 🚀 You have ${items.length} items on your list and you already packed ${itemsPacked} (${packedPercentage.toFixed(0)}%)`

        }
        </em> 
    </footer>
  )
}

export default Stats