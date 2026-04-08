import type { TaskModel } from './TaskModel.ts';

export type TaskStateModel = {
  tasks: TaskModel[]; // Histórico, MainForm
  secondsRemaining: number; // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; // Títul, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, Button
  currentCycle: number; // Home (bolinhas 1 a n)
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
