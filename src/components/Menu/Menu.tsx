import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './Menu.module.css';
import * as React from 'react';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    console.log('Clicado', Date.now());

    event.preventDefault(); // Não segue o link (href)

    setTheme(prevThem => (prevThem === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    console.log('useEffect sem dependências', Date.now());
  }); // Executado toda vez que o componente renderizar na tela

  // Util para quando tiver um API e não precisa ficar buscando dados para utilizar na mesma tela
  useEffect(() => {
    console.log('useEffect com array deps vazio', Date.now());
  }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log(`useEffect quando o valor do deps mudar. ${theme}`, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    // Primeiro executa essa função da outra renderização feita na tela
    // Também conhecida como função de limpeza cleanUp
    return () => {
      console.log('Este componente será atualizado, vamos evitar sujeira para não tirar o componente da tela');
    };
  }, [theme]);

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
