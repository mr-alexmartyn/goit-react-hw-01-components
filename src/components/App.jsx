import user from 'components/data-base/user.json';
import { Profile } from './Profile/Profile';
import data from 'components/data-base/data.json';
import { Statistics } from 'components/Statistics/Statistics';
import friends from 'components/data-base/friends.json';
import { FriendList } from 'components/FriendList/FriendList';
import transactions from 'components/data-base/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
