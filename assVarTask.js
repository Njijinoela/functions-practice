function checkTaskStatus(taskName, isCompleted){
    if (isCompleted === true){
        console.log(`Task ${taskName} is completed`)
    }else if (isCompleted === false) {
        console.log(`Task ${taskName} is not completed yet`)
    }
}
let taskLogger = checkTaskStatus;

taskLogger("Finish Homework", true);
taskLogger("Clean Room", false);
taskLogger("Go for a Run", true);
taskLogger("Read Book", false);

