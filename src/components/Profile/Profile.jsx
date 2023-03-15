import { Stats } from './ProfileStats';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDiscr,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
} from 'components/Profile/Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => (
  <ProfileCard>
    <ProfileDiscr>
      <ProfileAvatar>
        <img src={avatar} alt="User avatar" width="250px" height="250px" />
      </ProfileAvatar>
      <ProfileName>{username}</ProfileName>
      <ProfileTag>@{tag}</ProfileTag>
      <ProfileLocation>{location}</ProfileLocation>
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </ProfileDiscr>
  </ProfileCard>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
