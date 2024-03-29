import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "../NoTaskFound";
export default function Taskboard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn React  such than i can teat it like my walve and make it do whatever i want to do",
    tags: ["web", "next", "react"],
    priority: "high",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModla] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // Add Single Task
  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModla(false);
    setTaskToUpdate(null);
  }

  // Edit Single Task
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModla(true);
  }

  // Delee Single Task
  function handleDelete(id) {
    const taskIdAfterDelete = tasks.filter((task) => task.id !== id);
    setTasks(taskIdAfterDelete);
  }

  // Delete All Task
  function handleAllDeleteTask() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFevorite(id) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTask = [...tasks];
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    setTasks(newTask);
  }

  function handleCloseModal() {
    setShowAddModla(false);
    setTaskToUpdate(null);
  }

  function onSearch(keyword) {
    const searchResult = tasks.filter((task) =>
      task.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setTasks([...searchResult]);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskToUpdate={taskToUpdate}
          handleCloseModal={handleCloseModal}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={onSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={() => setShowAddModla(true)}
            handleAllDeleteTask={handleAllDeleteTask}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              handleEditTask={handleEditTask}
              handleDelete={handleDelete}
              handleFevorite={handleFevorite}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
}
