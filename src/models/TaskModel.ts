import type { TaskStateModel } from './TaskStateModel.ts';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completedDate: number | null; // quando o timer chega ao final
  interruptibleDate: number | null; // quando a task for interrompida
  type: keyof TaskStateModel['config'];
};
