import * as React from 'react';

import styles from './DefaultButton.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'blue' | 'green';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'blue',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
