import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className='text-center'>
        Entenda como funciona a técnica pomodoro. 🍅
      </p>
      <p className='text-center'>© 2026 Chronos Pomodoro - Feito com ☕</p>
    </footer>
  );
}
