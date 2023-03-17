import PropTypes from 'prop-types';
import {
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from 'components/Profile/ProfileStats.styled';

export const Stats = ({ followers, views, likes }) => (
  <ProfileStats>
    <ProfileStatsItem>
      <ProfileStatsLabel>Followers</ProfileStatsLabel>
      <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <ProfileStatsLabel>Views</ProfileStatsLabel>
      <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <ProfileStatsLabel>Likes</ProfileStatsLabel>
      <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
    </ProfileStatsItem>
  </ProfileStats>
);


Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};