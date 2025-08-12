import { useState } from 'react';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <aside className={`${styles.sidebar} ${isShowing ? '' : styles.collapsed}`}>
        <ul>
          <li>Platform Launch</li>
          <li>Marketing Plan</li>
          <li>Roadmap</li>
          <li>+ Create New Board</li>
        </ul>
        <button onClick={() => setIsShowing(isShowing ? false : true)}>hello</button>
      </aside>
    </>
  );
};

export default SideBar;
