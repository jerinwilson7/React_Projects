import { FriendsType } from "../Types/friends"
import Friend from "./Friend"

type FridendsListProps = {
    friends: FriendsType[]
    onSelection: (friend: FriendsType) => void
    selectedFriend:FriendsType | null

}

function FriendsList({friends,onSelection,selectedFriend}:FridendsListProps) {
    return (
        <div>
            <ul>
                {friends.map((friend)=>(
                    <Friend friend={friend} onSelection={onSelection} key={friend.id} selectedFriend={selectedFriend}/>
                ))}
            </ul>
        </div>
      )
}

export default FriendsList