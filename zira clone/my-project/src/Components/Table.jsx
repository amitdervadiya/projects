import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adddata, apifetch, deletedata, updatedata } from "../Features/Issueslice";
import TaskComponent from "./TaskComponent";

export default function Table() {
  const dispatch = useDispatch();
  const [Status, setStatus] = useState();
  const [IssueType, setIssueType] = useState();
  const [Priority, setPriority] = useState();
  const [Reporter, setReporter] = useState();
  const [Assignees, setAssignees] = useState();
  const [ShortSummary, setShortSummary] = useState();
  const [Description, setDescription] = useState();

  const [editId, setEditId] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    dispatch(apifetch());
  }, [dispatch]);

  const Taskdata = useSelector((state) => state.Taskkey.data);

  const addTask = () => {
    dispatch(adddata({ id: String(Date.now()), IssueType, Priority, Reporter, Assignees, ShortSummary, Description, Status }));
  };
  const handleEdit = (task) => {
    setSelectedTask(task);
  };
  const handleSave = (updatedTask) => {
    dispatch(updatedata({ id: updatedTask.id, updatedTask }));
  };

  const handleClose = () => {
    setSelectedTask(null);
  };

  return (
    <div className="mt-4">
      {selectedTask ? (
        <TaskComponent task={selectedTask} onSave={handleSave} onClose={handleClose} />
      ) : (
        <>
          <form className="h-[450px] w-[300px] gap-3 flex flex-col mt-2 mb-10 ">
            {/* Input Fields */}
            <label htmlFor="issue">Issue Type:</label>
            <select id="issue" value={IssueType} onChange={(e) => setIssueType(e.target.value)} required>
              <option value="task">Task</option>
              <option value="Bug">Bug</option>
              <option value="story">Story</option>
            </select>
            <label htmlFor="Reporter">Reporter</label>
            <select value={Reporter} onChange={(e) => setReporter(e.target.value)} required>
              <option value="amit">Amit</option>
              <option value="rahil">Rahil</option>
              <option value="sanjay">Sanjay</option>
            </select>
            <label htmlFor="ShortSummary">Short Summary</label>
            <input
              type="text"
              value={ShortSummary}
              onChange={(e) => setShortSummary(e.target.value)}
              className="border-black border"
              required
            />
            <input
              type="text"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-black border"
              placeholder="Description"
              required
            />
            <label htmlFor="Assignees">Assignees</label>
            <select value={Assignees} onChange={(e) => setAssignees(e.target.value)} required>
              <option value="amit">Amit</option>
              <option value="rahil">Rahil</option>
              <option value="sanjay">Sanjay</option>
            </select>
            <label htmlFor="Priority">Priority</label>
            <select value={Priority} onChange={(e) => setPriority(e.target.value)} required>
              <option value="Highest">Highest</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="Lowest">Lowest</option>
            </select>
            <select
              value={Status}
              onChange={(e) => setStatus(e.target.value)}
           
            >
              <option value="Backlog">Backlog</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
              <option value="Selectedfordevelopment">Selected for development</option>
            </select>
            <button onClick={addTask} type="button" className="p-2 bg-red cursor-pointer">
              Add Task
            </button>
          </form>


          <div className="h-400px w-full flex">
            <div className="w-[23%]">
              <h2>Backlog</h2>
              {Taskdata && Taskdata.length > 0 ? (
                Taskdata.map((task, i) => (
                  (
                    task.Status === "Backlog"
                  ) && (
                    <div key={i} className="h-[150px] w-full border-black border p-4">
                      <h3>{task.ShortSummary}</h3>
                      <p>{task.IssueType}</p>
                      <p>{task.Priority}</p>
                      <p>{task.Assignees}</p>
                      <button onClick={() => handleEdit(task)}>Edit</button>
                      <button onClick={() => dispatch(deletedata(task.id))}>Delete</button>
                    </div>
                  )
                ))
              ) : (
                "No data available"
              )}
            </div>
            <div className="w-[23%]">
              <h2>In Progress</h2>
              {Taskdata && Taskdata.length > 0 ? (
                Taskdata.map((task, i) => (
                  (task.Status === "In Progress") && (
                    <div key={i} className="h-[150px] w-full border-black border p-4">
                      <h3>{task.ShortSummary}</h3>
                      <p>{task.IssueType}</p>
                      <p>{task.Priority}</p>
                      <p>{task.Assignees}</p>
                      <button onClick={() => handleEdit(task)}>Edit</button>
                      <button onClick={() => dispatch(deletedata(task.id))}>Delete</button>
                    </div>
                  )
                ))
              ) : (
                "No data available"
              )}
            </div>
            <div className="w-[23%]">
              <h2>Selected for Development</h2>
              {Taskdata && Taskdata.length > 0 ? (
                Taskdata.map((task, i) => (
                  (
                    task.Status === "SelectedforDevelopment"
                  ) && (
                    <div key={i} className="h-[150px] w-full border-black border p-4">
                      <h3>{task.ShortSummary}</h3>
                      <p>{task.IssueType}</p>
                      <p>{task.Priority}</p>
                      <p>{task.Assignees}</p>
                      <button onClick={() => handleEdit(task)}>Edit</button>
                      <button onClick={() => dispatch(deletedata(task.id))}>Delete</button>
                    </div>
                  )
                ))
              ) : (
                "No data available"
              )}
            </div>
            <div className="w-[23%]">
              <h2>Done</h2>
              {Taskdata && Taskdata.length > 0 ? (
                Taskdata.map((task, i) => (
                  (task.Status === "Done") && (
                    <div key={i} className="h-[150px] w-full border-black border p-4">
                      <h3>{task.ShortSummary}</h3>
                      <p>{task.IssueType}</p>
                      <p>{task.Priority}</p>
                      <p>{task.Assignees}</p>
                      <button onClick={() => handleEdit(task)} className="mx-2">Edit</button>
                      <button onClick={() => dispatch(deletedata(task.id))}>Delete</button>
                    </div>
                  )
                ))
              ) : (
                "No data available"
              )}
            </div>


          </div>



        </>
      )}
    </div>
    
  );
}
