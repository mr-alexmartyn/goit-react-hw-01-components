import styled from '@emotion/styled';

export const FriendListItem = styled.li`
  background-color: #f2f0ed;
  border-radius: 10px;
  border: solid #802222;
  display: flex;
  padding: 10px;
  gap: 30px;
  align-items: center;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`;
export const ListStatusOn = styled.span`
  background-color: green;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 20px;
`;

export const ListStatusOff = styled.span`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 20px;
`;

export const Avatar = styled.img`
  height: 48px;
  width: 48px;
  margin-left: auto;
`;
export const Name = styled.p`
  font-size: 20px;
  color: #5e2b2b;
  margin-right: auto;
`;
