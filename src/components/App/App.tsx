import { useState } from 'react';
import css from './App.module.css';

import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';

import type { Votes, VoteType } from '../../types/votes';

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {

  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1, 
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  const canReset = votes.good > 0 || votes.neutral > 0 || votes.bad > 0 ? true : false;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset} />
      <VoteStats votes={votes} />
    </div>
  );
}