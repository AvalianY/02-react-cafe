import type { Votes } from '../../types/votes';
import cssVS from './VoteStats.module.css';
import cssN from './Notification.module.css';

interface VoteStatsProps {
  votes: Votes;
}

export default function VoteStats({ votes }: VoteStatsProps) {
  const total = votes.good + votes.neutral + votes.bad;
  const positivePercentage = total === 0 ? 0 : Math.round((votes.good / total) * 100);
    
  if (total === 0) {
    return <p className={cssN.message}>No feedback yet</p>;
}

  return (
    <div className={cssVS.container}>
        <p className={cssVS.stat}>Good: <strong>{votes.good}</strong></p>
        <p className={cssVS.stat}>Neutral: <strong>{votes.neutral}</strong></p>
        <p className={cssVS.stat}>Bad: <strong>{votes.bad}</strong></p>
        <p className={cssVS.stat}>Total: <strong>{total}</strong></p>
        <p className={cssVS.stat}>Positive: <strong>{positivePercentage}%</strong></p>
    </div>
  );
}