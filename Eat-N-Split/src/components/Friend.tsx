import { FriendsType } from "../Types/friends"
import Button from "./Button"

type FriendProps={
    friend:FriendsType
    onSelection: (friend: FriendsType) => void
    selectedFriend:FriendsType | null
}


function Friend({friend,onSelection,selectedFriend}:FriendProps) {

    const isSelected = selectedFriend ?.id === friend.id

  return (
    <li className={isSelected ? 'selected':''}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
            <p className="red">You owe {friend.name} {Math.abs(friend.balance)}</p>
        ) }

        {friend.balance > 0 && (
            <p className="green">{friend.name} owe you {Math.abs(friend.balance)}</p>
        )}

        {friend.balance === 0 && ( 
            <p>Setteled up with {friend.name}</p>
        )}

        <Button onClick={()=>onSelection(friend)}>{ isSelected ?  'Close' : 'Select'}</Button>

        {/* <button className="button">select</button> */}
    </li>
  )
}

export default Friend
