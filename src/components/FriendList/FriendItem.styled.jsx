import styled from '@emotion/styled';

export const FriendListItem = styled.li`
  background-color: #f2f0ed;
  border-radius: 10px;
  border: solid #802222;
  display: flex;
  flex-direction: row;
  width: 15%;
  padding: 10px;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
export const ListStatus = styled.span`
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  height: 48px;
  width: 48px;
`;
export const Name = styled.p`
  font-size: 20px;
  color: #5e2b2b;
`;
