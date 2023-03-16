import PropTypes from 'prop-types';
import {
  FriendListItem,
  ListStatus,
  Avatar,
  Name,
} from 'components/FriendList/FriendItem.styled';
export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItem>
      <ListStatus>{isOnline}</ListStatus>
      <Avatar src={avatar} alt="User avatar" width="48" height="48" />
      <Name>{name}</Name>
    </FriendListItem>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
