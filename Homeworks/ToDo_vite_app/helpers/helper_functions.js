import { taskInput, timerInput, task_table } from "./variables";

export const AddNewTask = (event) => {
   event.preventDefault();
   const task = document.createElement("li");
   if (taskInput.value.length > 3) {
      const timer = document.createElement("span");
      timer.className = 'Timer';
      if (+timerInput.value !== NaN) {
         let seconds = +timerInput.value;
         timer.style.display = 'block';
         const countDownTimer = setInterval(() => {
            seconds--
            timer.innerHTML = `${formatTime(seconds)}`;
            if (seconds <= 0) {
               clearInterval(countDownTimer);
               task.remove();
            }
         }, 1000)
      }
      const edit_task = document.createElement("img");
      edit_task.src = '../assets/icons/pencil.png';
      const delete_task = document.createElement("img");
      const navigation_bar = document.createElement("span");
      delete_task.src = '../assets/icons/bin.png';
      task.innerHTML = `
      <span id="taskText">
         ${taskInput.value}
      </span>
      `
      task.appendChild(navigation_bar);
      navigation_bar.appendChild(edit_task);
      navigation_bar.appendChild(delete_task);
      task.appendChild(timer);
      
      task_table.appendChild(task);
      delete_task.addEventListener("click", (event) => {
         event.preventDefault();
         console.log("Clicked");
         task.remove();
      })
      edit_task.addEventListener("click", (event) => {
         event.preventDefault();

         task.style.display = 'none';

         const edit_area = document.createElement("li");
         const edit_input = document.createElement("input");
         const edit_button = document.createElement("button");

         edit_area.appendChild(edit_input);
         edit_area.appendChild(edit_button);

         edit_button.innerHTML = 'Save';

         task_table.appendChild(edit_area);


         edit_button.addEventListener("click", (event) => {
            event.preventDefault();
            const task_text = document.querySelector("#taskText")
            task_text.innerText = edit_input.value;
            edit_area.remove();
            task.style.display = 'flex';
         })
      })
   } else {
      alert("Please enter a task properly");
   }

}


const formatTime = (seconds) => {
   let hours = Math.floor(seconds / 3600);
   let minutes = Math.floor((seconds % 3600) / 60);
   let remainingSeconds = seconds % 60;
   return hours + ":" + minutes + ":" + remainingSeconds
}


