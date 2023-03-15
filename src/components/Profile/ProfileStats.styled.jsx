import styled from '@emotion/styled';

export const ProfileStats = styled.ul`
  padding-left: 0;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #dcd5d5;
  height: 100px;
  font-size: 22px;
  border: solid #802222 1px;
`;

export const ProfileStatsItem = styled.li`
  width: 33%;
  height: 100%;
  border: solid #802222 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProfileStatsLabel = styled.li`
  display: block;
  text-align: center;
`;
export const ProfileStatsQuantity = styled.li`
  display: block;
  text-align: center;
`;
