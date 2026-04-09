import { useTaskContext } from '../../contexts/TaskContext/useTaskContext.ts';

import style from './CountDown.module.css';

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <>
      <div className={style.container}>{state.formattedSecondsRemaining}</div>
    </>
  );
}
