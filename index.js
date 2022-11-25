function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function (task) {
      task.complete = true;
    },
    logTaskState: function (task) {
      console.log(
        `${task.title} has${task.complete ? " " : " not "}been completed`
      );
    },
  };
  return task;
}

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
console.log(tasks);
