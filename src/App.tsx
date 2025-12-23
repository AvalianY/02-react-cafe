import { useState } from 'react';
import css from './css/App.module.css';

import CafeInfo from './CafeInfo';
import VoteOptions from './VoteOptions';
import VoteStats from './VoteStats';

import type { Votes, VoteType } from './types/votes';

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {

  const [votes, setVotes] = useState<Votes>(initialVotes);
  const total = votes.good + votes.neutral + votes.bad;

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1, 
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} total={total} />
      <VoteStats votes={votes} />
    </div>
  );
}