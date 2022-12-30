import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Change bed sheets",
      day: "Jan 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Clean the bathrooms",
      day: "Jan 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Clean windows",
      day: "Jan 5th at 2:30pm",
      reminder: false,
    },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
