import css from './css/VoteOptions.module.css';
import type { VoteType } from './types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  total: number;
}

export default function VoteOptions({ onVote, onReset,   total }: VoteOptionsProps) {
  return (
    <div className={css.container}> 
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>

      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>

      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>

      {total > 0 && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}