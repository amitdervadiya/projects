import React from 'react';


const inputClasses = "border border-border rounded-lg p-2";
const flexItemsCenterClasses = "flex items-center";
const userAvatarClasses = "w-8 h-8 rounded-full mr-2";
const textMutedForegroundClasses = "text-muted-foreground";
const fontMediumClasses = "font-medium";
const textSmClasses = "text-sm";
const cursorPointerClasses = "cursor-pointer";
const mb4Classes = "mb-4";

const New = () => {
    
  return (
    <div className="p-6 bg-card text-card-foreground rounded-lg shadow-md">
      <div className={flexItemsCenterClasses + " " + mb4Classes}>
        <input type="checkbox" className="mr-2" />
        <h2 className="text-xl font-bold">TASK-2727216</h2>
      </div>
      <h3 className="text-lg font-semibold mb-2">hello</h3>
      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Description</h4>
        <p className={textMutedForegroundClasses}>Add a description...</p>
      </div>
      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Comments</h4>
        <div className={flexItemsCenterClasses + " mb-2"}>
          <img aria-hidden="true" alt="user-avatar" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className={userAvatarClasses} />
          <input type="text" placeholder="Add a comment..." className={inputClasses + " flex-1"} />
        </div>
        <p className={textSmClasses + " " + textMutedForegroundClasses}>Pro tip: press <strong>M</strong> to comment</p>
        <div className="mt-2">
          <div className={flexItemsCenterClasses + " mb-1"}>
            <img aria-hidden="true" alt="user-avatar" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className={userAvatarClasses} />
            <span className={fontMediumClasses}>Lord Gaben</span>
            <span className={textSmClasses + " " + textMutedForegroundClasses + " ml-2"}>a day ago</span>
          </div>
          <p>hii</p>
          <div className={textSmClasses + " " + textMutedForegroundClasses}>
            <span className={cursorPointerClasses}>Edit</span> · <span className={cursorPointerClasses}>Delete</span>
          </div>
        </div>
      </div>
      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Status</h4>
        <select className={inputClasses}>
          <option>BACKLOG</option>
        </select>
      </div>
      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Assignees</h4>
        <div className={flexItemsCenterClasses}>
          <img aria-hidden="true" alt="user-avatar" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className={userAvatarClasses} />
          <span>Lord Gaben</span>
          <span className={textMutedForegroundClasses + " mx-2"}>X</span>
          <span className="text-blue-500 cursor-pointer">+ Add more</span>
        </div>
      </div>
      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Reporter</h4>
        <div className={flexItemsCenterClasses}>
          <img aria-hidden="true" alt="user-avatar" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className={userAvatarClasses} />
          <span>Pickle Rick</span>
        </div>
      </div>
      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Priority</h4>
        <span className="text-yellow-500">Medium</span>
      </div>
      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Original Estimate (Hours)</h4>
        <input type="text" placeholder="Number" className={inputClasses} />
      </div>
      <div className={mb4Classes}>
        <h4 className={fontMediumClasses}>Time Tracking</h4>
        <p>No time logged</p>
      </div>
      <div className={textSmClasses + " " + textMutedForegroundClasses}>
        <p>Created at a day ago</p>
        <p>Updated at a day ago</p>
      </div>
    </div>
  );
};

export default New;