import logo from '../../../../starter-code/assets/logo-dark.svg';
import ellipsis from '../../../../starter-code/assets/icon-vertical-ellipsis.svg';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { ButtonLabel } from '../../types/button';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__logo-container']}>
        <img src={logo} alt='Logo with kanban text' />
        <h1>Platform Launch</h1>
      </div>
      <div>
        <Button label={ButtonLabel.ADD_NEW_TASK} />
        <img src={ellipsis} alt='Vertical ellipsis' />
      </div>
    </header>
  );
};

export default Header;
