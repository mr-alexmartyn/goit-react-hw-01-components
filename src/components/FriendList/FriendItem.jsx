import PropTypes from 'prop-types';
import {
  FriendListItem,
  ListStatusOn,
  ListStatusOff,
  Avatar,
  Name,
} from 'components/FriendList/FriendItem.styled';
export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItem>
      {isOnline ? (
        <ListStatusOn>{isOnline}</ListStatusOn>
      ) : (
        <ListStatusOff>{isOnline}</ListStatusOff>)}
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
