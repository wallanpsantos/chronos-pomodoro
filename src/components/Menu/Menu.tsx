import { HistoryIcon, House, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './Menu.module.css';

export function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <a href='#' className={styles.menuLink}>
          <House />
        </a>
        <a href='#' className={styles.menuLink}>
          <HistoryIcon />
        </a>
        <a href='#' className={styles.menuLink}>
          <SettingsIcon />
        </a>
        <a href='#' className={styles.menuLink}>
          <SunIcon />
        </a>
      </div>
    </>
  );
}
