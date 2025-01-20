import React, { useState } from "react";

const inputClasses = "border border-border rounded-lg p-2";
const flexItemsCenterClasses = "flex items-center";
const userAvatarClasses = "w-8 h-8 rounded-full mr-2";
const textMutedForegroundClasses = "text-muted-foreground";
const fontMediumClasses = "font-medium";
const textSmClasses = "text-sm";
const cursorPointerClasses = "cursor-pointer";
const mb4Classes = "mb-4";

const TaskComponent = ({ task, onSave, onClose }) => {
  const [formData, setFormData] = useState(task || {});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSave = () => {
    onSave(formData);
    onClose();
  };
  if (!task) {
    return null;
  }


  return (
    <div className="p-6 bg-card text-card-foreground rounded-lg shadow-md">

      <button onClick={onClose} className="text-blue-500 mb-4">
        Back
      </button>


      <div className={`${flexItemsCenterClasses} ${mb4Classes}`}>
        <input
          type="checkbox"
          className="mr-2"
          checked={formData.completed || false}
          onChange={(e) => handleInputChange("completed", e.target.checked)}
        />
        <h2 className="text-xl font-bold">{formData.id || "New Task"}</h2>
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Short Summary</h4>
        <input
          type="text"
          value={formData.ShortSummary || ""}
          onChange={(e) => handleInputChange("ShortSummary", e.target.value)}
          className={`${inputClasses} w-full`}
        />
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Description</h4>
        <textarea
          value={formData.Description || ""}
          onChange={(e) => handleInputChange("Description", e.target.value)}
          className={`${inputClasses} w-full`}
          placeholder="Add a description..."
        />
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Comments</h4>
        <div className={`${flexItemsCenterClasses} mb-2`}>
          <img
            aria-hidden="true"
            alt="user-avatar"
            src="https://openui.fly.dev/openui/24x24.svg?text=👤"
            className={userAvatarClasses}
          />
          <input
            type="text"
            placeholder="Add a comment..."
            className={`${inputClasses} flex-1`}
          />
        </div>
        <p className={`${textSmClasses} ${textMutedForegroundClasses}`}>
          Pro tip: press <strong>M</strong> to comment
        </p>
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Status</h4>
        <select
          value={formData.Status || ""}
          onChange={(e) => handleInputChange("Status", e.target.value)}
          className={inputClasses}
        >
          <option value="Backlog">Backlog</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
          <option value="Selected for development">Selected for development</option>
        </select>
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Priority</h4>
        <select
          value={formData.Priority || ""}
          onChange={(e) => handleInputChange("Priority", e.target.value)}
          className={inputClasses}
        >
          <option value="Highest">Highest</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="Lowest">Lowest</option>
        </select>
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Assignees</h4>
        <div className={flexItemsCenterClasses}>
          <img
            aria-hidden="true"
            alt="user-avatar"
            src="https://openui.fly.dev/openui/24x24.svg?text=👤"
            className={userAvatarClasses}
          />
          <input
            type="text"
            value={formData.Assignees || ""}
            onChange={(e) => handleInputChange("Assignees", e.target.value)}
            className={`${inputClasses} w-full`}
            placeholder="Enter assignees (comma-separated)"
          />
        </div>
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Reporter</h4>
        <div className={flexItemsCenterClasses}>
          <img
            aria-hidden="true"
            alt="user-avatar"
            src="https://openui.fly.dev/openui/24x24.svg?text=👤"
            className={userAvatarClasses}
          />
          <input
            type="text"
            value={formData.Reporter || ""}
            onChange={(e) => handleInputChange("Reporter", e.target.value)}
            className={`${inputClasses} w-full`}
            placeholder="Enter reporter name"
          />
        </div>
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Original Estimate (Hours)</h4>
        <input
          type="number"
          value={formData.OriginalEstimate || ""}
          onChange={(e) => handleInputChange("OriginalEstimate", e.target.value)}
          className={inputClasses}
        />
      </div>


      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Time Tracking</h4>
        <input
          type="number"
          value={formData.TimeLogged || ""}
          onChange={(e) => handleInputChange("TimeLogged", e.target.value)}
          className={inputClasses}
        />
      </div>


      <button
        onClick={handleSave}
        className="p-2 bg-blue-500 text-white rounded-lg"
      >
        Save
      </button>
    </div>
  );
};

export default TaskComponent;
