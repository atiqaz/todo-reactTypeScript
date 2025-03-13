import React, { useState } from "react";
import { ItemspropsInterface, ListsProps } from "../../interfaces/Interfaces";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";

import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const Lists: React.FC<ListsProps> = React.memo(
  ({ data = [], onDelete, onUpdate, markAsComplete }) => {
    const [filter, setFilter] = useState("all");

    const filteredData = data.filter((it) => {
      if (filter === "completed") return it.isCompleted;
      if (filter === "notCompleted") return !it.isCompleted;
      return true;
    });

    return (
      <div className="lists-container">
        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-button ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`filter-button ${filter === "notCompleted" ? "active" : ""}`}
            onClick={() => setFilter("notCompleted")}
          >
            Not Completed
          </button>
        </div>

        {/* Items Grid */}
        {filteredData.length > 0 ? (
          <div className="items-grid">
            {filteredData.map((it) => (
              <Item
                key={it._id}
                data={it}
                onDelete={onDelete}
                onUpdate={onUpdate}
                markAsComplete={markAsComplete}
              />
            ))}
          </div>
        ) : (
          <div className="no-items">
            <p>No Items</p>
          </div>
        )}
      </div>
    );
  }
);

export default Lists;

const Item: React.FC<
  ItemspropsInterface & { onDelete: Function; onUpdate: Function }
> = ({ data, onDelete, onUpdate, markAsComplete }) => {
  const { _id, item, isCompleted, createdAt, updatedAt } = data;
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item);

  const handleEdit = () => setIsEditing(true);
  const handleUpdate = () => {
    onUpdate(_id, editedText);
    setIsEditing(false);
  };
  const handleDelete = () => onDelete(_id);
  const markComplete = () => markAsComplete(_id);

  return (
    <div className={`item-card ${isCompleted ? "completed" : ""}`}>
      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <p className={`item-text ${isCompleted ? "text-strikethrough" : ""}`}>
          {item}
        </p>
      )}

      <div className="meta-info">
        <small>Created: {createdAt}</small>
        {updatedAt && <small className="updatedAt">Updated: {updatedAt}</small>}
      </div>

      <div className="icons-container">
        {isEditing ? (
          <FaCheck className="icon update-icon" onClick={handleUpdate} />
        ) : (
          <FaEdit className="icon edit-icon" onClick={handleEdit} />
        )}
        <FaTrash className="icon delete-icon" onClick={handleDelete} />
        {/* <GrCompliance
          className={`icon completed-icon ${isCompleted ? "completed-icon-active" : ""}`}
          onClick={markComplete}
        /> */}
        {isCompleted ? 
            <ImCheckboxChecked className={`icon completed-icon ${isCompleted ? "completed-icon-active" : ""}`}   onClick={markComplete}/>
           : 
        <ImCheckboxUnchecked  className={`icon completed-icon ${isCompleted ? "completed-icon-active" : ""}`}   onClick={markComplete}/>
}
      </div>
    </div>
  );
};
