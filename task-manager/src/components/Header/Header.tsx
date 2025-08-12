import logo from '../../../../starter-code/assets/logo-dark.svg';
import logoMobile from '../../../../starter-code/assets/logo-mobile.svg';
import ellipsis from '../../../../starter-code/assets/icon-vertical-ellipsis.svg';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { ButtonLabel } from '../../types/button';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__logo-container']}>
        <picture>
          <source media='(min-width: 768px)' srcSet={logo} />
          <img src={logoMobile} alt='Logo with kanban text' />
        </picture>
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
