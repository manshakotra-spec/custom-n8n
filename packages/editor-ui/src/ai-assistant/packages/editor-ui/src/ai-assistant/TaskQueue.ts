export const queue: string[] = [];

export function addTask(task: string) {
  queue.push(task);
}
