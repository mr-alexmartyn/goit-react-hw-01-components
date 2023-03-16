import PropTypes, { object } from 'prop-types';
import {
  HeadTable,
  BodyTable,
  Table,
  LineTable,
  Type,
} from 'components/TransactionHistory/transactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <HeadTable>
        <LineTable>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </LineTable>
      </HeadTable>

      <BodyTable>
        {items.map(item => (
          <tr key={item.id}>
            <Type>{item.type}</Type>
            <Type>{item.amount}</Type>
            <Type>{item.currency}</Type>
          </tr>
        ))}
      </BodyTable>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
};
