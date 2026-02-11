import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './Menu.module.css';
import * as React from 'react';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  // Lazy initialization
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    return (localStorage.getItem('theme') as AvailableThemes) || 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault(); // Não segue o link (href)
    setTheme(prevThem => (prevThem === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <div className={styles.menu}>
        <a href='#' aria-label='Ir para a Home' className={styles.menuLink}>
          <HouseIcon />
        </a>
        <a href='#' aria-label='Ver Histórico' className={styles.menuLink}>
          <HistoryIcon />
        </a>
        <a href='#' aria-label='Ir para Configurações' className={styles.menuLink}>
          <SettingsIcon />
        </a>
        <a
          href='#'
          aria-label='Mudar tema para Claro ou Escuro'
          className={styles.menuLink}
          onClick={event => handleThemeChange(event)}
        >
          {nextThemeIcon[theme]}
        </a>
      </div>
    </>
  );
}
