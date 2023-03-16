import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  Title,
  StatList,
  Label,
  Percentage,
  ListItem,
} from 'components/Statistics/Statistics.styled';
export const Statistics = ({ title, stats }) => (
  <StatisticsWrapper>
    {title && <Title>{title}</Title>}
    <StatList>
      {stats.map(data => (
        <ListItem key={data.id}>
          <Label>{data.label}</Label>
          <Percentage>{data.percentage}</Percentage>
        </ListItem>
      ))}
    </StatList>
  </StatisticsWrapper>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
