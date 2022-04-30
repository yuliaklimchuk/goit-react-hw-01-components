import style from './Container/container.module.css';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory} from './TransactionHistory'
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

export const App = () => {
  const title = 'Upload stats';
  return (
    <div className={ style.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {title
        ? <Statistics title={title} stats={data} />
        : <Statistics stats={data} />}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
