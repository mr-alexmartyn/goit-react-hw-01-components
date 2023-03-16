import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  background-color: #f2f0ed;
  border: solid #802222;
  border-radius: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  color: grey;
`;

export const StatList = styled.ul`
  display: flex;
  height: 50%;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  border: solid #802222 1px;
`;

export const Label = styled.span`
  color: #5e2b2b;
  font-size: 25px;
`;

export const Percentage = styled.span`
  color: #5e2b2b;
  font-size: 30px;
`;

export const ListItem = styled.li`
  background-color: #dcd5d5;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  border: solid #802222 1px;
`;
