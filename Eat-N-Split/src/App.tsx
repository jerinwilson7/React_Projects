import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FridendsList from "./components/FriendsList";
import { initialFriends } from "./Data/initialfriends";
import { FriendsType } from "./Types/friends";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendsType | null>(
    null
  );

  const handleShowFriend = () => [setShowAddFriend((show) => !show)];

  const handleAddFriends = (friend: FriendsType) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend: FriendsType) => {
    setSelectedFriend((currentlySelected) =>
      currentlySelected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: number) => {
    console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null)
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FridendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}

        <Button onClick={handleShowFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;

// dfdf dfsfsdf dfdfsdgsfdffldfgdf;lgl;l;ml;ml