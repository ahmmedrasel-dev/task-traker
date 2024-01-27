import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
export default function Taskboard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn React  such than i can teat it like my walve and make it do whatever i want to do",
    tags: ["web", "next", "react"],
    priority: "Hight",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModla] = useState(false);

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModla(true)} />

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
