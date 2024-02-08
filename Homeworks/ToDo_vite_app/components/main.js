import { Helpers } from "../helpers";

const { AddNewTask, DeleteTask } = Helpers.Functions;
const { task, timer, add_task_btn, delete_task} = Helpers.Variables;

export const Main = () => {
   add_task_btn.addEventListener('click', AddNewTask);   
}
