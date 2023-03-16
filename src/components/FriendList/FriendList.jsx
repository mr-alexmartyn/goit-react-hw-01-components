import { FriendItem } from './FriendItem';
import { List } from 'components/FriendList/FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};
