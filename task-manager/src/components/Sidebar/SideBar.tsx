import { useState } from 'react';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <>
      <aside className={`${styles.sidebar} ${isShowing ? '' : styles.collapsed}`}>
        <button onClick={() => setIsShowing(isShowing ? false : true)}>hide</button>
        <ul>
          <li>Platform Launch</li>
          <li>Marketing Plan</li>
          <li>Roadmap</li>
          <li>+ Create New Board</li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
