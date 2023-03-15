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
