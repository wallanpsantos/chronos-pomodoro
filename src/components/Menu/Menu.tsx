import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './Menu.module.css';
import * as React from 'react';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    console.log('Clicado', Date.now());

    event.preventDefault(); // Não segue o link (href)

    setTheme(prevThem => (prevThem === 'dark' ? 'light' : 'dark'));

    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <>
      <nav className={styles.menu}>
        <h1>{theme}</h1>
      </nav>

      <div className={styles.menu}>
        <a
          href='#'
          aria-label='Ir para a Home'
          className={styles.menuLink}
        >
          <HouseIcon />
        </a>
        <a
          href='#'
          aria-label='Ver Histórico'
          className={styles.menuLink}
        >
          <HistoryIcon />
        </a>
        <a
          href='#'
          aria-label='Ir para Configurações'
          className={styles.menuLink}
        >
          <SettingsIcon />
        </a>
        <a
          href='#'
          aria-label='Mudar tema para Claro ou Escuro'
          className={styles.menuLink}
          onClick={event => handleThemeChange(event)}
        >
          <SunIcon />
        </a>
      </div>
    </>
  );
}
