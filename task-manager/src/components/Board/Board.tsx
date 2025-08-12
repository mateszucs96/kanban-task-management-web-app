import { ButtonLabel } from '../../types/button';
import Button from '../Button/Button';

const Board = () => {
  return (
    <main>
      <div>
        <h2>This board is empty. Create a new column to get started.</h2>
        <Button label={ButtonLabel.ADD_NEW_COLUMN} />
      </div>
    </main>
  );
};

export default Board;
