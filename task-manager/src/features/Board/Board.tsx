import { ButtonLabel } from '../../types/button';
import Button from '../../components/Button/Button';

import styles from './Board.module.scss';

const Board = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.board}>
        <div>
          <h2>This board is empty. Create a new column to get started.</h2>
          <Button label={ButtonLabel.ADD_NEW_COLUMN} />
        </div>
      </main>
    </div>
  );
};

export default Board;
